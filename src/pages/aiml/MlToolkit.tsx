import React from "react";
import { FileText } from "lucide-react";

const supervised = [
  { title: "Linear Regression", path: "/ml/linear-regression/notes.txt" },
  { title: "Logistic Regression", path: "/ml/logistic-regression/notes.txt" },
  { title: "Decision Trees", path: "/ml/decision-tree/notes.txt" },
  { title: "Random Forest", path: "/ml/random-forest/notes.txt" },
  { title: "SVM (Support Vector Machine)", path: "/ml/svm/notes.txt" },
];

const unsupervised = [
  { title: "K-Means Clustering", path: "/ml/kmeans/notes.txt" },
  { title: "Hierarchical Clustering", path: "/ml/hierarchical/notes.txt" },
  { title: "PCA (Dimensionality Reduction)", path: "/ml/pca/notes.txt" },
];

const Section = ({ title, topics }: { title: string; topics: { title: string; path: string }[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-indigo-600 dark:text-cyan-400 mb-6">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {topics.map((topic, index) => (
        <a
          key={index}
          href={topic.path}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col justify-between group"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 dark:bg-cyan-900 p-3 rounded-full">
              <FileText className="h-6 w-6 text-indigo-700 dark:text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">
              {topic.title}
            </h4>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
            Access notes for {topic.title}.
          </p>
        </a>
      ))}
    </div>
  </div>
);

const MlToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-cyan-400">
          Machine Learning Toolkit
        </h2>

        <Section title="Supervised Learning" topics={supervised} />
        <Section title="Unsupervised Learning" topics={unsupervised} />
      </div>
    </section>
  );
};

export default MlToolkit;
