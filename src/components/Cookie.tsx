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
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-indigo-600 dark:text-cyan-400 hover:underline mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center justify-center space-x-2 mb-4">
              <Cookie className="h-10 w-10 text-indigo-600 dark:text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Cookie Policy
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Use Cookies
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Last updated: January 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Cavora AI uses cookies and similar technologies to improve your experience, analyze performance, and deliver personalized content. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. What are cookies?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, login sessions, and other information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Types of cookies we use</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                <li><strong>Marketing Cookies:</strong> Used to show relevant ads across the web.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Managing cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                You can manage or disable cookies via your browser settings. Note that disabling some cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Third-party cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may allow third-party services (e.g., Google Analytics, ad partners) to use cookies to collect information about your online activities.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Changes to this policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may update this Cookie Policy periodically. The "Last updated" date will reflect the most recent changes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Contact us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <div className="p-4 mt-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> privacy@Cavora.com
                </p>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              to="/privacy"
              className="text-indigo-600 dark:text-cyan-400 hover:underline"
            >
              View Privacy Policy
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl hover:from-indigo-700 hover:to-cyan-600 transition-all"
            >
              Back to Sign Up
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
