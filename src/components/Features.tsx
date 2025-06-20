import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Timer,
  GaugeCircle,
  BrainCog,
  Zap,
  Rocket,
  BarChart3,
  CloudLightning,
  ShieldCheck
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Optimized Infrastructure',
    description: 'Leverage hardware-aware scheduling and resource allocation for peak performance on GPUs and TPUs.'
  },
  {
    icon: Rocket,
    title: 'Lightning-Fast Training',
    description: 'Accelerate training cycles using mixed-precision, LoRA, and cutting-edge optimization techniques.'
  },
  {
    icon: BarChart3,
    title: 'Training Analytics',
    description: 'Visualize training time, resource usage, model metrics, and performance bottlenecks in real time.'
  },
  {
    icon: Zap,
    title: 'Smart Scheduling Engine',
    description: 'Auto-queue, prioritize, and parallelize multiple model runs with intelligent job orchestration.'
  },
  {
    icon: CloudLightning,
    title: 'Multi-Cloud Compatible',
    description: 'Deploy training jobs across AWS, GCP, Azure, or on-premise with zero manual overhead.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Checkpointing',
    description: 'Auto-save progress and resume model training without losing experiments or hyperparameters.'
  }
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
              Accelerate Model Training
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cavora delivers everything you need to train, optimize, and deploy AI models faster — from compute to control.
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
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
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
