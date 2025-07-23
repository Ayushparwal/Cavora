import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check } from "lucide-react";

const TryOut = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isRealTimeQuery = (query: string): boolean => {
    const keywords = ["today", "latest", "news", "trending", "current", "update", "now", "live"];
    return keywords.some((word) => query.toLowerCase().includes(word));
  };

  const fetchWebResults = async (query: string): Promise<string> => {
    try {
      const response = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": import.meta.env.VITE_SERPER_API_KEY,
        },
        body: JSON.stringify({ q: query }),
      });

      const data = await response.json();

      if (data.organic && data.organic.length > 0) {
        return data.organic
          .slice(0, 5)
          .map((item: any, idx: number) => `(${idx + 1}) ${item.title}: ${item.snippet}`)
          .join("\n");
      } else {
        return "No relevant Google search results found.";
      }
    } catch (error) {
      console.error("Serper API error:", error);
      return "⚠️ Failed to fetch search results. Proceeding with AI-only response.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setOutput("");
    setDisplayedOutput("");

    try {
      let finalPrompt = input;

      if (isRealTimeQuery(input)) {
        const webResults = await fetchWebResults(input);
        finalPrompt = `You are a smart assistant. Use the following recent web search results to help answer the user's question:\n\n${webResults}\n\nUser question: ${input}`;
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: finalPrompt }],
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        setOutput(data.choices[0].message.content);
      } else {
        setOutput("⚠️ No response from AI. Please try again.");
      }
    } catch (err) {
      console.error("LLM error:", err);
      setOutput("⚠️ Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!output) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setDisplayedOutput("");

    let index = 0;
    const interval = 15;

    timerRef.current = setInterval(() => {
      setDisplayedOutput((prev) => {
        const nextChar = output.charAt(index);
        index++;
        if (index >= output.length) clearInterval(timerRef.current!);
        return prev + nextChar;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [output]);

  return (
    <section id="tryout" className="py-28 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-2"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight text-gray-800 dark:text-white">
            Welcome to <span className="text-blue-700 dark:text-blue-400">Cavora</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Power intelligent search and deep research with <span className="font-semibold text-black dark:text-white">Cavora’s advanced AI insights</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              <textarea
                rows={3}
                className="w-full p-4 pr-12 text-sm rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-3 bottom-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition duration-300 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>

          {displayedOutput && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Thinking...</h3>
                <button
                  onClick={copyToClipboard}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>
              <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed text-sm">
                <p>{displayedOutput}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TryOut;