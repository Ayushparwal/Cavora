import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  ArrowLeft,
  Shield,
  Eye,
  Database,
  Lock,
  Users,
  Globe,
} from "lucide-react";

const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="shrink-0 flex items-center justify-center p-1.5 bg-indigo-100 dark:bg-cyan-950 rounded-full">
      <Icon className="h-5 w-5 text-indigo-600 dark:text-cyan-400" />
    </div>
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
  </div>
);

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Last updated: June 15, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Sections */}

              <div className="mb-8">
                <SectionHeader icon={Shield} title="1. Introduction" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Cavora AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our artificial intelligence services and platform. Please read this privacy policy carefully.
                </p>
              </div>

              <div className="mb-8">
                <SectionHeader icon={Database} title="2. Information We Collect" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6">
                  <li>Register for an account</li>
                  <li>Use our AI services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage Data</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We automatically collect certain information when you use our services, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>AI queries and interactions</li>
                  <li>Performance and usage statistics</li>
                </ul>
              </div>

              <div className="mb-8">
                <SectionHeader icon={Eye} title="3. How We Use Your Information" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Providing and maintaining our AI services</li>
                  <li>Improving and personalizing user experience</li>
                  <li>Processing transactions and billing</li>
                  <li>Sending administrative and promotional communications</li>
                  <li>Analyzing usage patterns and service performance</li>
                  <li>Detecting and preventing fraud or abuse</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div className="mb-8">
                <SectionHeader icon={Users} title="4. Information Sharing" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Consent:</strong> When you have given explicit consent</li>
                </ul>
              </div>

              <div className="mb-8">
                <SectionHeader icon={Lock} title="5. Data Security" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              <div className="mb-8">
                <SectionHeader icon={Globe} title="6. AI Data Processing" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When you use our AI services:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Your queries may be processed to improve our AI models</li>
                  <li>We may retain conversation logs for service improvement</li>
                  <li>Personal information in queries is handled with strict confidentiality</li>
                  <li>You can request deletion of your AI interaction data</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Your Rights</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request copies of your personal information</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. International Transfers</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> privacy@Cavora.com<br />
                    <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Data Protection Officer:</strong> dpo@Cavora.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              to="/terms"
              className="text-indigo-600 dark:text-cyan-400 hover:underline"
            >
              View Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
