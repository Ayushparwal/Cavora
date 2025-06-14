import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  { title: "Arrays", path: "/dsa/array" },
  { title: "Strings", path: "/dsa/string" },
  { title: "Queue", path: "/dsa/queue" },
  { title: "Hash Table", path: "/dsa/hashtable" },
  { title: "Dynamic Programming", path: "/dsa/dynamic-programming" },
  { title: "Math", path: "/dsa/math" },
  { title: "Sorting", path: "/dsa/sorting" },
  { title: "Greedy", path: "/dsa/greedy" },
  { title: "Depth-First Search", path: "/dsa/dfs" },
  { title: "Binary Search", path: "/dsa/binary-search" },
  { title: "Database", path: "/dsa/database" },
  { title: "Matrix", path: "/dsa/matrix" },
  { title: "Tree", path: "/dsa/tree" },
  { title: "Breadth-First Search", path: "/dsa/bfs" },
  { title: "Bit Manipulation", path: "/dsa/bit-manipulation" },
  { title: "Two Pointers", path: "/dsa/two-pointers" },
  { title: "Prefix Sum", path: "/dsa/prefix-sum" },
  { title: "Heap (Priority Queue)", path: "/dsa/heap" },
  { title: "Simulation", path: "/dsa/simulation" },
  { title: "Binary Tree", path: "/dsa/binary-tree" },
  { title: "Stack", path: "/dsa/stack" },
  { title: "Graph", path: "/dsa/graph" },
  { title: "Counting", path: "/dsa/counting" },
  { title: "Sliding Window", path: "/dsa/sliding-window" },
  { title: "Design", path: "/dsa/design" },
  { title: "Enumeration", path: "/dsa/enumeration" },
  { title: "Backtracking", path: "/dsa/backtracking" },
  { title: "Union Find", path: "/dsa/disjoint-set" },
  { title: "Linked List", path: "/dsa/linked-list" },
  { title: "Number Theory", path: "/dsa/number-theory" },
  { title: "Ordered Set", path: "/dsa/ordered-set" },
  { title: "Monotonic Stack", path: "/dsa/monotonic-stack" },
  { title: "Segment Tree", path: "/dsa/segment-tree" },
  { title: "Trie", path: "/dsa/trie" },
  { title: "Combinatorics", path: "/dsa/combinatorics" },
  { title: "Bitmask", path: "/dsa/bitmask" },
  { title: "Recursion", path: "/dsa/recursion" },
  { title: "Divide and Conquer", path: "/dsa/divide-and-conquer" },
  { title: "Binary Indexed Tree", path: "/dsa/fenwick-tree" },
  { title: "Memoization", path: "/dsa/memoization" },
  { title: "Hash Function", path: "/dsa/hash-function" },
  { title: "Geometry", path: "/dsa/geometry" },
  { title: "Binary Search Tree", path: "/dsa/bst" },
  { title: "String Matching", path: "/dsa/string-matching" },
  { title: "Topological Sort", path: "/dsa/topological-sort" },
  { title: "Shortest Path", path: "/dsa/shortest-path" },
  { title: "Rolling Hash", path: "/dsa/rolling-hash" },
  { title: "Game Theory", path: "/dsa/game-theory" },
  { title: "Interactive", path: "/dsa/interactive" },
  { title: "Data Stream", path: "/dsa/data-stream" },
  { title: "Monotonic Queue", path: "/dsa/monotonic-queue" },
  { title: "Brainteaser", path: "/dsa/brainteaser" },
  { title: "Doubly-Linked List", path: "/dsa/doubly-linked-list" },
  { title: "Randomized", path: "/dsa/randomized" },
  { title: "Merge Sort", path: "/dsa/merge-sort" },
  { title: "Counting Sort", path: "/dsa/counting-sort" },
  { title: "Iterator", path: "/dsa/iterator" },
  { title: "Concurrency", path: "/dsa/concurrency" },
  { title: "Probability and Statistics", path: "/dsa/probability" },
  { title: "Quickselect", path: "/dsa/quickselect" },
  { title: "Suffix Array", path: "/dsa/suffix-array" },
  { title: "Line Sweep", path: "/dsa/line-sweep" },
  { title: "Bucket Sort", path: "/dsa/bucket-sort" },
  { title: "Minimum Spanning Tree", path: "/dsa/mst" },
  { title: "Shell Sort", path: "/dsa/shell-sort" },
  { title: "Reservoir Sampling", path: "/dsa/reservoir-sampling" },
  { title: "Strongly Connected Component", path: "/dsa/scc" },
  { title: "Eulerian Circuit", path: "/dsa/eulerian-circuit" },
  { title: "Radix Sort", path: "/dsa/radix-sort" },
  { title: "Rejection Sampling", path: "/dsa/rejection-sampling" },
  { title: "Biconnected Component", path: "/dsa/biconnected-component" }
];



const DsaToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400">
          DSA Toolkit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={topic.path}
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
                    {topic.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm z-10 relative">
                  Explore {topic.title} concepts and examples.
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DsaToolkit;
