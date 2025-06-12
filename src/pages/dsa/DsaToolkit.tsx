import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const topics = [
  { title: "Arrays", path: "/dsa/array" },
  { title: "Strings", path: "/dsa/string" },
  { title: "Heap", path: "/dsa/heap" },
  { title: "Hash Table", path: "/dsa/hashtable" },
  { title: "Linked Lists", path: "/dsa/linked-list" },
  { title: "Stacks", path: "/dsa/stack" },
  { title: "Queues", path: "/dsa/queue" },
  { title: "Trees", path: "/dsa/tree" },
  { title: "Graphs", path: "/dsa/graph" },
  { title: "Segment Tree", path: "/dsa/segment-tree" },
  { title: "Trie", path: "/dsa/trie" },
];

const DsaToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-cyan-400">
          DSA Toolkit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-cyan-900 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-indigo-700 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:underline">
                  {topic.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Explore {topic.title} concepts and examples.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DsaToolkit;
