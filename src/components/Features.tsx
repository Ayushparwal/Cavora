import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Lightbulb, FileDown, NotebookPen, Sparkles, BrainCircuit, Code2 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive DSA Notes',
    description: 'Master data structures and algorithms with in-depth explanations, visual aids, and real coding patterns.'
  },
  {
    icon: NotebookPen,
    title: 'Practice Sheets',
    description: 'Sharpen your DSA and CP skills with curated problem sets categorized by difficulty and technique.'
  },
  {
    icon: FileText,
    title: 'Coding Tests',
    description: 'Simulate real coding interviews with timed challenges and track your progress with detailed feedback.'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Code Generator',
    description: 'Instantly generate solutions for DSA problems, competitive questions, and edge-case test scenarios.'
  },
  {
    icon: BrainCircuit,
    title: 'DSA Chat Assistant',
    description: 'Ask Cavora about any algorithm, time complexity, or code logic — get fast, contextual answers with examples.'
  },
  {
    icon: Lightbulb,
    title: 'Performance Analytics',
    description: 'Visualize your strengths, weaknesses, and coding speed with smart analytics from past quizzes and challenges.'
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
              Learn Seamlessly
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore high-quality resources designed to accelerate your AI and Development journey — from theory to production.
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
