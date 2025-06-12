import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, BrainCircuit, Languages, BotMessageSquare } from "lucide-react";

const toolkits = [
  {
    title: "DSA Toolkit",
    description:
      "Master data structures and algorithms with visual aids and curated practice sets.",
    icon: <BookOpenCheck className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />,
    link: "/dsa",
  },
  {
    title: "AI/ML Toolkit",
    description:
      "Build intelligent systems with step-by-step guidance and real-world datasets.",
    icon: <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />,
    link: "/aiml",
  },
  {
    title: "NLP Toolkit",
    description:
      "Dive into the world of language—text processing, sentiment analysis, and more.",
    icon: <Languages className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />,
    link: "/nlp",
  },
  {
    title: "LLM Toolkit",
    description:
      "Learn to harness the power of large language models like GPT, LLaMA, and beyond.",
    icon: <BotMessageSquare className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />,
    link: "/llm",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-cyan-900/20 dark:from-indigo-900/40 dark:via-purple-900/20 dark:to-cyan-900/40"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          ></motion.h1>

          {/* Toolkit Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Explore Our Learning Toolkits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {toolkits.map((kit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={kit.link} className="block h-full">
                    <div className="h-full p-6 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl text-center shadow-md hover:shadow-xl transition-all relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/10 to-cyan-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0" />
                      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 h-full">
                        <div className="p-3 bg-indigo-50 dark:bg-cyan-900 rounded-full">
                          {kit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-400">
                          {kit.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {kit.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl hover:from-indigo-700 hover:to-cyan-600 transition-all flex items-center space-x-2 shadow-lg"
              >
                <span className="text-lg font-semibold">Get Started Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
          
          </motion.div>

          {/* Metrics Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">
                      500+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Students Empowered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">
                      100+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">
                      98%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Positive Feedback
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
