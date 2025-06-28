import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const particleCount = 30;

const Hero = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* BACKGROUND GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-cyan-900/30 dark:from-indigo-900/50 dark:via-purple-900/30 dark:to-cyan-900/50 z-0" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = 6 + Math.random() * 4;
          const delay = Math.random() * 3;
          return (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-cyan-300/40 rounded-full shadow-md"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{
                x: [0, Math.random() * 30 - 15, 0],
                y: [0, Math.random() * 40 - 20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="space-y-10"
        >
          {/* TITLE */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            <br />
            <br />
            Cavora empowers you to
            <br />
            <span className="relative inline-block mt-4 animate-pulse">
              <span className="absolute inset-0 blur-md opacity-25 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg z-0" />
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                <Typewriter
                  words={[
                    "train AI models faster!",
                    "scale ML workloads efficiently!",
                    "automate model training with zero code!",
                    "reduce training costs intelligently!",
                    "optimize GPU usage!",
                    "accelerate experimentation cycles!",
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

          {/* SUBTEXT */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300"
          >
            Cavora is a next-gen platform built to accelerate AI model training
            through optimized infrastructure, intelligent scheduling, and
            hardware-aware fine-tuning.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0px 0px 18px rgba(99, 179, 237, 0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl hover:from-indigo-700 hover:to-cyan-600 transition-all flex items-center space-x-2 shadow-xl"
              onClick={() => navigate("/signup")}
            >
              <span className="text-lg font-semibold">Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
            className="mt-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "Engineers Accelerated", value: "500+" },
                    { label: "Experiments Optimized", value: "100+" },
                    { label: "Feedback Satisfaction", value: "98%" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ delay: idx * 0.2, duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">
                        {item.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
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
