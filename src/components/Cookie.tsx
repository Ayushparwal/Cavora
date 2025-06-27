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
            
          <br/>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Cookie className="h-10 w-10 text-indigo-600 dark:text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Cookie Policy
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Use Cookies
            </h1>
            
          </div>

          {/* Cookie Policy Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Cavora uses cookies and similar tracking technologies to enhance your experience,
                personalize content, understand usage patterns, and improve our AI platform’s
                performance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. What are cookies?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Cookies are small text files placed on your device to store data that websites and
                online services can read and write. They help us recognize you, remember your
                preferences, and track how you interact with our platform.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Why we use cookies</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
                <li><strong>Authentication:</strong> To keep you logged in securely.</li>
                <li><strong>Preferences:</strong> To store theme, UI settings, and preferred language.</li>
                <li><strong>Analytics:</strong> To monitor how users interact with learning modules and features.</li>
                <li><strong>Performance:</strong> To diagnose issues and improve speed and responsiveness.</li>
                <li><strong>Marketing:</strong> To measure the effectiveness of our outreach campaigns.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Third-party cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may use cookies from third-party tools such as Google Analytics, GitHub OAuth,
                and LinkedIn Insights for better insights and authentication services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Managing cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                You can control or delete cookies using your browser settings. However, please note
                that disabling certain cookies may affect the functionality of some parts of Cavora.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">5. Updates to this policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may occasionally update this policy. When we do, we will revise the “Last
                updated” date at the top of this page.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">6. Contact us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this policy or how we use cookies, feel free to reach out:
              </p>
              <div className="p-4 mt-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> privacy@cavora.tech
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
