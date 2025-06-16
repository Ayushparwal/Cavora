import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Code, FlaskConical, Sparkles, Search } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const sections = [
    {
      title: "Run Your Code",
      description: "Execute code in multiple languages",
      icon: <Code size={28} />,
      path: "/run-code",
    },
    {
      title: "AI Generator",
      description: "Generate text, images, or ideas with AI",
      icon: <Sparkles size={28} />,
      path: "/ai-generator",
    },
    {
      title: "ML Models Testing",
      description: "Test and visualize ML models",
      icon: <FlaskConical size={28} />,
      path: "/ml-models",
    },
    {
      title: "AI Brain Tools",
      description: "Try custom NLP & Vision models",
      icon: <Brain size={28} />,
      path: "/ai-tools",
    },
  ];

  const filteredSections = sections.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(search.toLowerCase()) ||
      description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-8 text-gray-900 dark:text-white">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6"
      >
        <br />
        AI & Code Dashboard
      </motion.h1>

      <div className="flex items-center justify-center mb-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredSections.map(({ title, description, icon, path }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition"
            onClick={() => navigate(path)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl text-blue-600 dark:text-blue-300">
                {icon}
              </div>
              <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </motion.div>
        ))}
        {filteredSections.length === 0 && (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400 mt-10">
            No tools match your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
