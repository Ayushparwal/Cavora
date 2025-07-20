import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-black z-0" />

      <div className="z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span className="text-indigo-500">Cavora</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Test your typing skills with real{" "}
          <span className="text-indigo-600 dark:text-white font-semibold">
            <Typewriter
              words={["Python", "JavaScript", "C++", "HTML/CSS", "React"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>{" "}
          code snippets.
        </motion.p>

        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-xl text-lg font-semibold shadow-xl"
          onClick={() => navigate("/test")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Typing Test
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
