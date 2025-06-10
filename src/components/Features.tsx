import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Cpu, Globe, Rocket } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced Neural Networks',
    description: 'State-of-the-art deep learning models that understand context and deliver human-like responses.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Processing',
    description: 'Process millions of data points in seconds with our optimized AI infrastructure.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and security protocols to protect your sensitive data.',
  },
  {
    icon: Cpu,
    title: 'Scalable Computing',
    description: 'Auto-scaling infrastructure that grows with your needs, from startup to enterprise.',
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Deploy your AI models worldwide with our distributed cloud infrastructure.',
  },
  {
    icon: Rocket,
    title: 'Easy Integration',
    description: 'Simple APIs and SDKs that integrate seamlessly with your existing systems.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale AI applications with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;