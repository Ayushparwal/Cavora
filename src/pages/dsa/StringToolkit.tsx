import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const stringSubtopics = [
  { title: "String Matching - KMP", path: "/dsa/string/kmp" },
  { title: "String Matching - Rabin-Karp", path: "/dsa/string/rabinkarp" },
  { title: "Z-Algorithm", path: "/dsa/string/zalgorithm" },
  { title: "Longest Palindromic Substring", path: "/dsa/string/longestpalindrome" },
  { title: "Anagram Check", path: "/dsa/string/anagramcheck" },
  { title: "Substring Search", path: "/dsa/string/substringsearch" },
  { title: "Manacher’s Algorithm", path: "/dsa/string/manacher" },
];

const StringToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-cyan-400">
          String Subtopics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stringSubtopics.map((sub, idx) => (
            <Link
              key={idx}
              to={sub.path}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StringToolkit;
