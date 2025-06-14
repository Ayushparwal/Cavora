import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Search } from "lucide-react";
import { motion } from "framer-motion";

const queueSubtopics = [
  { title: "Queue Basics (FIFO)", path: "/dsa/queue/basics" },
  { title: "Circular Queue", path: "/dsa/queue/circularqueue" },
  { title: "Priority Queue", path: "/dsa/queue/priorityqueue" },
  { title: "Deque (Double-Ended Queue)", path: "/dsa/queue/deque" },
  { title: "Implement Queue using Stacks", path: "/dsa/queue/queueusingstack" },
  { title: "Implement Stack using Queues", path: "/dsa/queue/stackusingqueue" },
  { title: "Sliding Window Maximum (Monotonic Queue)", path: "/dsa/queue/slidingwindowmax" },
  { title: "Rotting Oranges (BFS)", path: "/dsa/queue/rottingoranges" },
  { title: "Walls and Gates", path: "/dsa/queue/wallsandgates" },
  { title: "Number of Islands (BFS)", path: "/dsa/queue/numberofislands" },
  { title: "Level Order Traversal", path: "/dsa/queue/levelordertraversal" },
  { title: "Course Schedule (Topological Sort - Kahn's Algorithm)", path: "/dsa/queue/courseschedule" },
  { title: "Shortest Path in Binary Matrix", path: "/dsa/queue/shortestpathbinarymatrix" },
  { title: "Minimum Time to Inform All Employees", path: "/dsa/queue/informemployees" }
];

const QueueToolkit = () => {
  const [search, setSearch] = useState("");

  const filteredSubtopics = queueSubtopics.filter((sub) =>
    sub.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400">
          Queue Subtopics
        </h2>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search BFS, Kahn's Algo, Deque..."
            className="w-full pl-12 pr-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Subtopic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSubtopics.map((sub, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={sub.path}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-tr from-indigo-200 to-purple-200 dark:from-cyan-900 dark:to-blue-800 rounded-bl-full"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    y: [0, -5, 5, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 6 }}
                />
                <div className="flex items-center space-x-4 z-10 relative">
                  <div className="bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-cyan-700 dark:to-blue-800 p-3 rounded-full shadow">
                    <FileText className="h-6 w-6 text-indigo-700 dark:text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:underline transition-all duration-200">
                    {sub.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm z-10 relative">
                  Learn and visualize {sub.title} with examples and guides.
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueueToolkit;
