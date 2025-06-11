import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Copy, Check } from "lucide-react";
import axios from "axios";

const TryOut = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setOutput("");

    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      };

      const chatCompletion = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `You are Carter, the intelligent assistant for Cavora – a cutting-edge platform dedicated to innovation in artificial intelligence and data science.

As Carter, you specialize in answering questions related to:
• Machine Learning (ML)
• Artificial Intelligence (AI)
• Deep Learning and Neural Networks
• Agentic AI and Autonomous Agents
• Large Language Models (LLMs)
• Generative AI (text, image, audio synthesis)
• Data Science and Analytics
• Statistics and Mathematical Foundations of ML/AI

You provide clear, insightful, and well-structured responses that help learners, developers, and researchers. Your tone is professional yet approachable, and your goal is to empower users with accurate, up-to-date knowledge and guidance.

When a question falls outside these domains, you politely inform the user and guide them back to topics within your expertise.

Always format your responses for clarity and readability. Do not use code unless specifically asked for it.`,
            },
            {
              role: "user",
              content: input,
            },
          ],
          max_tokens: 1000,
        },
        { headers }
      );

      const reply = chatCompletion.data.choices[0].message.content;
      setOutput(reply || "Sorry, I couldn’t generate a response.");
    } catch (error) {
      setOutput("An error occurred while fetching the response.");
    }

    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              Try Cavora
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience the power of our AI technology right now. No signup required.
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
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Cavora anything..."
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
              <motion.button
                type="submit"
                disabled={isLoading || !input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl hover:from-indigo-700 hover:to-cyan-600 transition-all flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="h-5 w-5 animate-spin" />
                    <span>Thinking...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
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
              <div className="flex items-center justify-end mb-4">
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>
              <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                {output}
              </pre>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TryOut;
