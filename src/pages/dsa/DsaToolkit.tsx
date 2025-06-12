import React from "react";
import { FileText } from "lucide-react";

const topics = [
  {
    title: "Arrays",
    children: [
      { title: "Sliding Window", path: "/dsa/array/slidingwindow" },
      { title: "Two Pointers", path: "/dsa/array/twopointers" },
      { title: "Prefix Sum", path: "/dsa/array/prefixsum" },
      { title: "Kadane's Algorithm", path: "/dsa/array/kadane" },
      { title: "Merge Intervals", path: "/dsa/array/mergeintervals" },
      { title: "Matrix Traversals", path: "/dsa/array/matrixtraversals" },
      { title: "Difference Array", path: "/dsa/array/differencearray" },
    ],
  },
  {
    title: "Searching",
    children: [
      { title: "Binary Search", path: "/dsa/searching/binarysearch" },
      { title: "Ternary Search", path: "/dsa/searching/ternarysearch" },
      { title: "Exponential Search", path: "/dsa/searching/exponentialsearch" },
      { title: "Interpolation Search", path: "/dsa/searching/interpolationsearch" },
      { title: "Fibonacci Search", path: "/dsa/searching/fibonaccisearch" },
    ],
  },
  {
    title: "Sorting",
    children: [
      { title: "Quick Sort", path: "/dsa/sorting/quicksort" },
      { title: "Merge Sort", path: "/dsa/sorting/mergesort" },
      { title: "Counting Sort", path: "/dsa/sorting/countingsort" },
      { title: "Bucket Sort", path: "/dsa/sorting/bucketsort" },
      { title: "Radix Sort", path: "/dsa/sorting/radixsort" },
      { title: "Heap Sort", path: "/dsa/sorting/heapsort" },
      { title: "Shell Sort", path: "/dsa/sorting/shellsort" },
    ],
  },
  {
    title: "Strings",
    children: [
      { title: "KMP Algorithm", path: "/dsa/string/kmp" },
      { title: "Rabin-Karp", path: "/dsa/string/rabinkarp" },
      { title: "Z-Algorithm", path: "/dsa/string/zalgorithm" },
      { title: "Trie", path: "/dsa/string/trie" },
      { title: "Suffix Array", path: "/dsa/string/suffixarray" },
      { title: "Rolling Hash", path: "/dsa/string/rollinghash" },
      { title: "Palindrome Check", path: "/dsa/string/palindrome" },
      { title: "Anagram Detection", path: "/dsa/string/anagram" },
    ],
  },
  {
    title: "Stacks & Queues",
    children: [
      { title: "Monotonic Stack", path: "/dsa/stack/monotonicstack" },
      { title: "Min/Max Stack", path: "/dsa/stack/minmaxstack" },
      { title: "Stack Expression Eval", path: "/dsa/stack/eval" },
      { title: "Circular Queue", path: "/dsa/queue/circular" },
      { title: "Monotonic Queue", path: "/dsa/queue/monotonicqueue" },
    ],
  },
  {
    title: "Graphs",
    children: [
      { title: "DFS", path: "/dsa/graph/dfs" },
      { title: "BFS", path: "/dsa/graph/bfs" },
      { title: "Dijkstra", path: "/dsa/graph/dijkstra" },
      { title: "Bellman-Ford", path: "/dsa/graph/bellmanford" },
      { title: "Floyd-Warshall", path: "/dsa/graph/floydwarshall" },
      { title: "Union Find (DSU)", path: "/dsa/graph/unionfind" },
    ],
  },
];


const DsaToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-cyan-400">
          DSA Toolkit
        </h2>

        {topics.map((topic, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {topic.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topic.children.map((sub, i) => (
                <a
                  key={i}
                  href={sub.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg hover:scale-[1.02] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-100 dark:bg-cyan-900 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-indigo-700 dark:text-cyan-400" />
                    </div>
                    <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:underline">
                      {sub.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DsaToolkit;
