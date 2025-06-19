import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Cavora
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Transforming the future with AI-driven learning. Unlock your coding superpowers with Cavora.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/cavora64/",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/cavora-ai/",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/ayushparwal2004",
                },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-lg transition"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/integrations" className="hover:text-white transition">
                  Integrations
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="https://github.com/Ayushparwal/Cavora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Community
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Connect</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>hello@cavora.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+91 XXXXX-XXXXX</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-white">Subscribe to updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-r-lg hover:from-indigo-700 hover:to-cyan-600 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Cavora. All rights reserved.</span>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link to="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
