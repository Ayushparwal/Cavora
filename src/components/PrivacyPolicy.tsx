import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
            </h1>
            
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <h2>1. No Data Collection</h2>
                <p>
                  Cavora.tech does not collect, store, or share any personal information. This is an educational platform built using public and open-source content to help users learn about technologies such as Generative AI, LLMs, AGI, Linux, and more.
                </p>
              </div>

              <div className="mb-8">
                <h2>2. Open & Accessible</h2>
                <p>
                  All content presented on this site is curated from freely available resources, including tutorials, open-source libraries, and documentation. We do not sell services or require any login or personal details to access learning materials.
                </p>
              </div>

              <div className="mb-8">
                <h2>3. No Cookies or Tracking</h2>
                <p>
                  We do not use cookies, analytics tools, or tracking pixels. Your browsing experience on Cavora is private and anonymous by design.
                </p>
              </div>

              <div className="mb-8">
                <h2>4. Your Responsibility</h2>
                <p>
                  While using this site, please ensure that you are using the learning material ethically. Some tools or technologies mentioned (like AI model APIs) may require your own registration on third-party platforms. Please follow their terms of service when using them.
                </p>
              </div>

              <div className="mb-8">
                <h2>5. Changes to This Policy</h2>
                <p>
                  If we ever introduce features that involve data usage or personalization, we will update this policy transparently. But as of now, Cavora is 100% free, open, and does not collect any data.
                </p>
              </div>

              <div className="mb-8">
                <h2>6. Contact</h2>
                <p>
                  If you have questions or feedback, feel free to reach out to us:
                </p>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p>
                    <strong>Email:</strong> hello@cavora.tech<br />
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              to="/cookies"
              className="text-indigo-600 dark:text-cyan-400 hover:underline"
            >
              View Cookie Disclaimer
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
