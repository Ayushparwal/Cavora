import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Copy, Check } from "lucide-react";

const TryOut = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setOutput(
        `⚠️ The server is currently under maintenance.\n\nWe're working hard to bring everything back online shortly. Please check back again in a few minutes. Thank you for your patience!`
      );
      setIsLoading(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tryout" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Welcome to{" "}
            </span>
            <span className="text-red-600 drop-shadow-md">Cavora</span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Power intelligent search and deep research with{" "}
            <span className="font-semibold text-black dark:text-white">
              Cavora’s advanced AI insights
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="mb-10">
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-gradient-to-br from-white/80 dark:from-gray-800/80 to-gray-100 dark:to-gray-900 p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
    
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your question here..."
      className="flex-1 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-lg shadow-md focus:shadow-lg"
    />

    <motion.button
      type="submit"
      disabled={isLoading || !input.trim()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-lg rounded-xl transition-all shadow-lg hover:from-purple-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="bg-white dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  AI Response
                </h3>
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
              <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed text-base">
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
