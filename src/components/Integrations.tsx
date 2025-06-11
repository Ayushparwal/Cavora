import React from "react";
import { motion } from "framer-motion";
import { Zap, Slack, Chrome, Github, Server, Database } from "lucide-react";

const integrations = [
  {
    icon: Slack,
    title: "Slack",
    description: "Get real-time AI insights directly in your Slack channels.",
  },
  {
    icon: Zap,
    title: "Zapier",
    description: "Automate workflows with AI-powered Zapier integrations.",
  },
  {
    icon: Chrome,
    title: "Chrome Extension",
    description: "Bring AI assistance to your browser with one click.",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Generate and review code with seamless GitHub AI integration.",
  },
  {
    icon: Server,
    title: "API Access",
    description: "Integrate AI into any system via our powerful API.",
  },
  {
    icon: Database,
    title: "Database Sync",
    description: "Connect and query your databases intelligently with AI.",
  },
];

const Integrations = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect Cavora AI with the tools you already use and love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
