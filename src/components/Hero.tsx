import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Square, ArrowDown } from "lucide-react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const streamedContentRef = useRef("");
  const contentEndRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  const isRealTimeQuery = (query: string): boolean => {
    const keywords = ["latest", "today", "now", "current", "recent"];
    return keywords.some((word) => query.toLowerCase().includes(word));
  };

  const fetchWebResults = async (query: string): Promise<string> => {
    try {
      const response = await axios.get("https://serpapi.com/search.json", {
        params: {
          q: query,
          hl: "en",
          gl: "us",
          api_key: import.meta.env.VITE_SERP_API_KEY,
        },
      });

      const results = response.data.organic_results.slice(0, 5);
      return results
        .map(
          (res: any, index: number) =>
            `${index + 1}. ${res.title} - ${res.link}`
        )
        .join("\n");
    } catch (error) {
      console.error("SerpAPI error:", error);
      return "⚠️ Unable to fetch real-time results.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);
    setStreamedContent("");
    streamedContentRef.current = "";

    let contextMessages: Message[] = updatedMessages.slice(-10);

    if (isRealTimeQuery(input)) {
      const webResults = await fetchWebResults(input);
      contextMessages = [
        {
          role: "system",
          content: `You are a real-time AI assistant. Use ONLY the following search results:\n\n${webResults}\n\nSummarize the best answer.`,
        },
        ...contextMessages,
      ];
    }

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
          { role: "assistant", content: "Stopping please wait!." },
        ]);
      } else {
        console.error("LLM error:", err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "⚠️ Something went wrong." },
        ]);
      }
    }

    setIsLoading(false);
    setController(null);
    setInput("");
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
  }, [messages, streamedContent]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      setShowScrollToBottom(!scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tryout" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to{" "}
            <span className="text-indigo-600 dark:text-blue-400">Cavora</span>
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
  <div
    className="prose prose-sm sm:prose-base max-w-none leading-relaxed text-gray-900 dark:text-gray-100 
               prose-strong:text-gray-900 dark:prose-strong:text-white 
               prose-em:text-gray-800 dark:prose-em:text-gray-200 
               prose-code:text-red-600 dark:prose-code:text-red-400 
               prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 
               prose-pre:rounded-md prose-pre:p-4 prose-pre:text-sm prose-pre:overflow-auto 
               prose-ul:pl-5 prose-ul:list-disc"
    dangerouslySetInnerHTML={{
      __html: msg.content
        // Multiline code block (```bash)
        .replace(/```(?:shell|bash)?\n([\s\S]*?)```/g, (_, code) => {
          return `<pre><code>${code
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br/>")}</code></pre>`;
        })
        // Bullet points (basic)
        .replace(/^- (.*?)(\n|$)/gm, "<li>$1</li>")
        .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
        // Bold **text**
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // Italic *text*
        .replace(/\*(?!\*)(.*?)\*/g, "<em>$1</em>")
        // Inline code `code`
        .replace(/`([^`]+)`/g, `<code>$1</code>`)
        // Line breaks (not inside <pre>)
        .replace(/(?<!<\/pre>)\n/g, "<br/>"),
    }}
  ></div>
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
                <div className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-100">
                  {streamedContent}
                </div>
              </div>
            )}

            <div ref={contentEndRef} />

            {showScrollToBottom && (
              <button
                onClick={scrollToBottom}
                className="fixed bottom-20 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            )}

            <form onSubmit={handleSubmit}>
              <div className="relative">
                <textarea
                  rows={3}
                  className="w-full p-4 pr-12 text-sm rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="What do you want to know?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></textarea>
                <button
                  type={isLoading ? "button" : "submit"}
                  onClick={isLoading ? handleStop : undefined}
                  disabled={!input.trim() && !isLoading}
                  className="absolute right-3 bottom-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Square className="w-5 h-5" />
                  ) : (
                    <Send className="w-5 h-5" />
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
