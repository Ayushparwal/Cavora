import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, Shield, FileText, Users, Globe } from 'lucide-react';

const TermsOfService = () => {
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
              <Brain className="h-10 w-10 text-indigo-600 dark:text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Cavora AI
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Last updated: January 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="h-6 w-6 text-indigo-600 dark:text-cyan-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By accessing and using Cavora AI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-6 w-6 text-indigo-600 dark:text-cyan-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Use License</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Permission is granted to temporarily access Cavora AI services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on Cavora AI's services</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-indigo-600 dark:text-cyan-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. User Accounts</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Globe className="h-6 w-6 text-indigo-600 dark:text-cyan-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Acceptable Use</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. AI Service Usage</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our AI services are provided "as is" and are intended for general use. While we strive for accuracy, we cannot guarantee that all AI-generated content will be accurate, complete, or suitable for your specific needs.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You are responsible for reviewing and verifying any AI-generated content before using it for any purpose. Cavora AI is not liable for any decisions made based on AI-generated content.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Termination</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  In no event shall Cavora AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> legal@Cavora.com<br />
                    <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
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
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;