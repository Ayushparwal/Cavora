import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Copy,
  Check,
  Square,
  ArrowDown,
  Plus,
  SlidersHorizontal,
  Mic,
  AudioLines,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FormattedMessage from "./Chat/formattedMessage";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const TryOut = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [controller, setController] = useState<AbortController | null>(null);
  const [streamedContent, setStreamedContent] = useState("");
  const streamedContentRef = useRef("");
  const contentEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);
    setStreamedContent("");
    streamedContentRef.current = "";
    setInput("");

    const contextMessages = updatedMessages.slice(-10);

    const abortController = new AbortController();
    setController(abortController);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: contextMessages,
            stream: true,
          }),
          signal: abortController.signal,
        }
      );

      if (!response.ok || !response.body) throw new Error("Stream error");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (let line of lines) {
          if (line.startsWith("data: ")) {
            line = line.replace("data: ", "").trim();
            if (line === "[DONE]") break;
            try {
              const json = JSON.parse(line);
              const word = json.choices?.[0]?.delta?.content || "";
              fullText += word;
              streamedContentRef.current = fullText;
              setStreamedContent(fullText);
              await new Promise((res) => setTimeout(res, 20));
            } catch (err) {
              console.error("Stream parse error:", err);
            }
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: streamedContentRef.current },
      ]);
      setStreamedContent("");
    } catch (err) {
      if ((err as any).name === "AbortError") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "🛑 Stopped by user." },
        ]);
      } else {
        console.error("LLM error:", err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "⚠️ Server Under Maintenance." },
        ]);
      }
    }

    setIsLoading(false);
    setController(null);
  };

  const handleStop = () => {
    if (controller) {
      controller.abort();
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const scrollToBottom = () => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tryout" className="py-20 bg-white dark:bg-gray-900">
      <div
        ref={scrollContainerRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to <span className="text-indigo-600 dark:text-blue-400">Cavora</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Powerful Intelligent Search and Deep Research
          </p>
          
        </div>

        {!user ? (
          <div className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You must be logged in to use this feature.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Login Now
            </button>
          </div>
        ) : (
          <div className="px-4 py-4 space-y-8">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-4 w-full rounded-2xl shadow-md transition-colors duration-300 ease-in-out text-black bg-white dark:bg-gray-800 dark:text-white ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start justify-between w-full">
                    <FormattedMessage content={msg.content} />
                  </div>

                  {msg.role === "assistant" && (
                    <button
                      onClick={() => copyToClipboard(msg.content, idx)}
                      className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                    >
                      {copiedIndex === idx ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {streamedContent && (
              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-left">
                <FormattedMessage content={streamedContent} />
              </div>
            )}

            <div ref={contentEndRef} />

            <form onSubmit={handleSubmit}>
              <div className="relative rounded-3xl bg-gray-100 dark:bg-gray-800 p-2 flex items-center gap-2 border border-gray-300 dark:border-gray-600">
                <Plus className="text-gray-600 dark:text-gray-300 ml-2 w-5 h-5 cursor-pointer" />
                <div className="flex items-center gap-1 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Tools</span>
                </div>
                <textarea
                  rows={1}
                  className="flex-1 px-3 py-2 text-sm bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 resize-none"
                  placeholder="Ask anything"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></textarea>
                <Mic className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
                <button
                  type={isLoading ? "button" : "submit"}
                  onClick={isLoading ? handleStop : undefined}
                  disabled={!input.trim() && !isLoading}
                  className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 flex items-center justify-center transition duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Square className="w-4 h-4" />
                  ) : (
                    <AudioLines className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default TryOut;
