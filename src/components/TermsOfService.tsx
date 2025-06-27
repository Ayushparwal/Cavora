import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <br/>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By accessing and using <strong>Cavora AI</strong>'s services, you <strong>accept and agree</strong> to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use License</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Permission is granted to temporarily access our services for <strong>personal, non-commercial</strong> use only. Under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes</li>
                  <li>Reverse engineer our software</li>
                  <li>Remove proprietary notations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When creating an account, you must provide <strong>accurate and current information</strong>. You are responsible for maintaining <strong>password confidentiality</strong> and for all activities under your account.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Notify us immediately of any unauthorized use or security breach.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Acceptable Use</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>For any unlawful or harmful purpose</li>
                  <li>To infringe on intellectual property rights</li>
                  <li>To spread false, harmful, or malicious content</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload malicious code or disrupt systems</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. AI Service Usage</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our AI services are provided <strong>"as is"</strong>. While we strive for accuracy, we <strong>do not guarantee</strong> the completeness or suitability of AI-generated content.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You must review and verify AI outputs before acting upon them.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your privacy is important to us. Review our <Link to="/privacy" className="text-indigo-600 dark:text-cyan-400 hover:underline">Privacy Policy</Link> to understand how your data is handled.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Termination</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We reserve the right to <strong>suspend or terminate</strong> your account without notice for any breach of these Terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Cavora AI shall not be liable for any <strong>indirect, incidental, or consequential damages</strong> resulting from your use of our services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may update these Terms at any time. Significant changes will be communicated via notice at least 30 days in advance.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you have questions, contact us at:
                </p>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> legal@Cavora.tech<br />
                    <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
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

export default TermsOfService;
