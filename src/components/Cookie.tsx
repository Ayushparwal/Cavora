import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, ArrowLeft } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <br></br>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Transparency
            </h1>
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Cavora is a free and open educational platform sharing knowledge about Generative AI, LLMs, AGI, and future technologies. All information here is sourced from publicly available and open resources like research papers, GitHub projects, official documentation, and open communities.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Cookies & Tracking</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We do not collect or sell your personal data. Cavora may use simple, privacy-respecting cookies to store basic preferences (such as theme or language), but no marketing, ad tracking, or profiling tools are involved.
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
                <li><strong>Theme Preference:</strong> Light/Dark mode toggle.</li>
                <li><strong>Navigation Memory:</strong> Helps improve UX across sessions.</li>
                <li><strong>Basic Analytics:</strong> Anonymous usage stats to improve learning materials (optional).</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Everything Here is Open & Free</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our goal is to organize the world's freely available AI learning content into a central place. We don’t charge, gatekeep, or track learners. We encourage self-paced exploration of:
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
                <li>Large Language Models (LLMs)</li>
                <li>Autonomous AI Agents</li>
                <li>Open-source AGI Research</li>
                <li>Future Tech like Neural Interfaces, Self-learning Systems</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Need to Manage Cookies?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                You can turn off cookies in your browser settings anytime. Disabling them might affect theme storage or navigation, but not access to the content.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Want to Contribute?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you know a great article, GitHub repo, or AI tool that others should learn about—feel free to suggest or open a pull request! We believe in open learning and open contribution.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Questions?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For feedback or contributions, reach out:
              </p>
              <div className="p-4 mt-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> support@cavora.tech
                </p>
              </div>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-12 text-center">
            <Link
              to="/privacy"
              className="text-indigo-600 dark:text-cyan-400 hover:underline"
            >
              View Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
