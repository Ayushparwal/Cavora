import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Camera,
  FlaskConical,
  ScrollText,
  Search,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const toolkits = [
  {
    title: "DSA Toolkit",
    description:
      "Master Data Structures and Algorithms with visual aids and curated practice sets.",
    icon: (
      <BookOpenCheck className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />
    ),
    link: "/dsa",
    comingSoon: false,
  },
  {
    title: "CP Toolkit",
    description:
      "Sharpen your problem-solving skills and excel in Competitive Programming contests.",
    icon: (
      <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />
    ),
    link: "#",
    comingSoon: true,
  },
  {
    title: "AI/ML Toolkit",
    description:
      "Build and apply AI/ML models with hands-on tools and real-world datasets.",
    icon: (
      <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-cyan-400" />
    ),
    link: "#",
    comingSoon: true,
  },
];

const Hero = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredToolkits = toolkits.filter(
    (kit) =>
      kit.title.toLowerCase().includes(search.toLowerCase()) ||
      kit.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-cyan-900/20 dark:from-indigo-900/40 dark:via-purple-900/20 dark:to-cyan-900/40" />

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
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
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            <br />
            <br />
            Cavora empowers you to
            <br />
            <span className="relative inline-block mt-4">
              <span className="absolute inset-0 blur-md opacity-20 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg z-0" />
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                <Typewriter
                  words={[
                    "crack DSA like a pro!",
                    "master Competitive Programming!",
                    "build intelligent AI applications!",
                    "accelerate your coding journey!",
                    "learn by solving real-world problems!",
                    "become a confident tech creator!",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <br />
            <br />
            <br />

            <div className="flex justify-center mb-10">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow border border-gray-300 dark:border-gray-700 w-full max-w-xs">
                <Search className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <input
                  type="text"
                  placeholder="Search toolkits..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-200 w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredToolkits.map((kit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={kit.comingSoon ? "opacity-70 relative" : ""}
                >
                  <Link
                    to={kit.link}
                    className="block h-full cursor-pointer"
                    onClick={(e) => kit.comingSoon && e.preventDefault()}
                  >
                    <div className="h-full p-6 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl text-center shadow-md hover:shadow-xl transition-all relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/10 to-cyan-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0" />
                      {kit.comingSoon && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute top-2 right-2 text-xs bg-yellow-500 text-white px-2 py-1 rounded shadow-lg animate-pulse"
                        >
                          Coming Soon
                        </motion.div>
                      )}
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
              onClick={() => navigate("/signup")}
            >
              <span className="text-lg font-semibold">Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

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
