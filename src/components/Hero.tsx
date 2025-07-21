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
  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  🚧 This site is currently under maintenance. Please check back soon!
</motion.p>

      </div>
    </section>
  );
};

export default Hero;
