import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const particleCount = 30;

const topics = [
  { title: "🧠 LLMs", path: "/llms", description: "Learn about Large Language Models" },
  { title: "📚 NLP", path: "/nlp", description: "Master Natural Language Processing" },
  { title: "✨ Generative AI", path: "/genai", description: "Explore tools that generate text, images, etc." },
  { title: "🐧 Linux", path: "/linux", description: "Master Linux commands & systems" },
  { title: "📊 Data Science", path: "/ds", description: "Learn Data Science & Analytics" },
  { title: "🤖 Machine Learning", path: "/ml", description: "Understand ML models and algorithms" },
  { title: "🧠 AI Fundamentals", path: "/ai", description: "Foundational concepts of AI & ethics" },
  { title: "📷 Computer Vision", path: "/cv", description: "Image classification, detection, and more" },
  { title: "🧪 Reinforcement Learning", path: "/rl", description: "Learn how agents take actions in environments" },
{ title: "📈 Time Series", path: "/timeseries", description: "Forecasting and analyzing sequential data" },
{ title: "🔍 Explainable AI", path: "/xai", description: "Interpret and explain AI model decisions" },
{ title: "🧩 Multimodal AI", path: "/multimodal", description: "Combine vision, text, and audio in one model" },

];


const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 transition-colors"
    >
      {/* BACKGROUND GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 z-0" />

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
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
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
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            <br></br>
            <br></br>
            Start Learning Today
            <br />
            <span className="relative inline-block mt-4 animate-pulse">
              <span className="absolute inset-0 blur-md opacity-25 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg z-0" />
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                <Typewriter
                  words={["LLMs", "Generative AI", "Linux", "DSA", "Open Source", "NLP"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
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
            className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300"
          >
            Cavora is a modern platform for curious learners to explore foundational tech topics with zero fluff.
          </motion.p>

          {/* TOPIC GRID */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          >
            {topics.map((topic, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-gray-100 dark:bg-gray-800 text-left rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-md transition"
                onClick={() => navigate(topic.path)}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-cyan-400">{topic.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{topic.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
