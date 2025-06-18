import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Copy, Check, MessageSquare  } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const TryOut = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedBlock, setCopiedBlock] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setOutput("");

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are Carter, an expert assistant from Cavora. You strictly answer questions only related to Data Structures and Algorithms (DSA) and Competitive Programming (CP). Do not respond to any non-DSA or non-CP topics under any circumstances. Always introduce yourself at the start of a new conversation and provide concise, helpful answers.",
            },
            {
              role: "user",
              content: input,
            },
          ],
          max_tokens: 1000,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API}`,
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setOutput(aiResponse);
    } catch (error) {
      setOutput(
        "An error occurred while generating the response. Please try again."
      );
    }

    setIsLoading(false);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedBlock(index);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const renderers = {
    code({
      className,
      children,
      ...props
    }: {
      className?: string;
      children?: React.ReactNode;
    }) {
      const match = /language-(\w+)/.exec(className || "");
      const codeContent = String(children).trim();
      const index = codeContent.length + Math.random();

      return (
        <div className="relative group">
          <SyntaxHighlighter
            {...props}
            language={match?.[1] || "text"}
            style={oneDark}
            PreTag="div"
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1rem",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            {codeContent}
          </SyntaxHighlighter>
          <button
            onClick={() => copyToClipboard(codeContent, index)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded bg-gray-700 text-white"
          >
            {copiedBlock === index ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      );
    },
  };

  return (
    <section id="tryout" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Try Cavora AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ask anything about DSA and Competitive Programming.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="mb-8">
  <div className="flex flex-col md:flex-row gap-4 items-stretch">
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSubmit(e);
        }
      }}
      placeholder="Ask Cavora AI anything about DSA or CP..."
      className="flex-1 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none min-h-[56px] md:min-h-[100px]"
      rows={3}
    />

    <motion.button
      type="submit"
      disabled={isLoading || !input.trim()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl hover:from-indigo-700 hover:to-cyan-600 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed self-end md:self-auto"
    >
      {isLoading ? (
        <>
          <Sparkles className="h-5 w-5 animate-spin" />
          <span>Thinking...</span>
        </>
      ) : (
        <>
          <MessageSquare  className="h-5 w-5" />
          <span>Send</span>
        </>
      )}
    </motion.button>
  </div>
</form>


          {output && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Solution :
                </h3>
                <button
                  onClick={() => copyToClipboard(output, -1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  {copiedBlock === -1 ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>

              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <ReactMarkdown components={renderers}>{output}</ReactMarkdown>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TryOut;
