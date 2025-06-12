import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const arraySubtopics = [
  { title: "Sliding Window", path: "/dsa/array/slidingwindow" },
  { title: "Two Pointers", path: "/dsa/array/twopointers" },
  { title: "Prefix Sum", path: "/dsa/array/prefixsum" },
  { title: "Kadane's Algorithm", path: "/dsa/array/kadane" },
  { title: "Merge Intervals", path: "/dsa/array/mergeintervals" },
  { title: "Matrix Traversals", path: "/dsa/array/matrixtraversals" },
  { title: "Difference Array", path: "/dsa/array/differencearray" },
];

const ArrayToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-cyan-400">
          Array Subtopics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {arraySubtopics.map((sub, idx) => (
            <a
              key={idx}
              href={sub.path}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-cyan-900 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-indigo-700 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:underline">
                  {sub.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArrayToolkit;
