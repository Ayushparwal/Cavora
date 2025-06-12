import React from "react";

const twoPointersProblems = [
  {
    name: "Two Sum II - Input Array Is Sorted",
    link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    difficulty: "Easy",
  },
  {
    name: "Reverse String",
    link: "https://leetcode.com/problems/reverse-string/",
    difficulty: "Easy",
  },
  {
    name: "Valid Palindrome",
    link: "https://leetcode.com/problems/valid-palindrome/",
    difficulty: "Easy",
  },
  {
    name: "Squares of a Sorted Array",
    link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    difficulty: "Easy",
  },
  {
    name: "Remove Duplicates from Sorted Array",
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    difficulty: "Easy",
  },
  {
    name: "Move Zeroes",
    link: "https://leetcode.com/problems/move-zeroes/",
    difficulty: "Easy",
  },
  {
    name: "3Sum",
    link: "https://leetcode.com/problems/3sum/",
    difficulty: "Medium",
  },
  {
    name: "Container With Most Water",
    link: "https://leetcode.com/problems/container-with-most-water/",
    difficulty: "Medium",
  },
  {
    name: "Remove Nth Node From End of List",
    link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    difficulty: "Medium",
  },
  {
    name: "Trapping Rain Water",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    difficulty: "Hard",
  },
];

const getBadgeColor = (difficulty: string) => {
  if (difficulty === "Easy") return "bg-green-700 text-white";
  if (difficulty === "Medium") return "bg-yellow-500 text-black";
  if (difficulty === "Hard") return "bg-red-600 text-white";
  return "bg-gray-500 text-white";
};

const TwoPointers = () => {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-cyan-400">
          🔀 Two Pointers Technique
        </h1>

        <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
          The <strong>Two Pointers</strong> technique is used to solve problems involving sorted arrays, linked lists, or searching for pairs. It typically involves using two pointers moving inwards or at different speeds.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">🧠 Key Concept</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By strategically moving two pointers based on a condition (e.g., sum, difference, or character match), we can solve problems in <code>O(n)</code> or <code>O(n log n)</code> time rather than using brute force approaches.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-gray-900 dark:text-white">📚 Learn More</h2>
        <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 underline space-y-2">
          <li><a href="https://leetcode.com/tag/two-pointers/" target="_blank">LeetCode: Two Pointers Problems</a></li>
          <li><a href="https://www.geeksforgeeks.org/two-pointers-technique/" target="_blank">GeeksForGeeks: Two Pointers Technique</a></li>
          <li><a href="https://medium.com/@codingfreak/two-pointer-technique-in-array-32c250e7e1f7" target="_blank">Medium Blog: Two Pointer Technique</a></li>
          <li><a href="https://www.youtube.com/watch?v=BOaZlEJxS3E" target="_blank">YouTube: Two Pointers Explanation</a></li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">💡 Top 10 Two Pointers Problems</h2>
        <div className="overflow-x-auto text-sm text-gray-200">
          <table className="min-w-full bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Problem</th>
                <th className="px-4 py-3 text-center">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {twoPointersProblems.map((p, i) => (
                <tr key={i} className="border-b border-gray-700 hover:bg-gray-700/30">
                  <td className="px-4 py-3 text-orange-400 hover:underline">
                    <a href={p.link} target="_blank" rel="noopener noreferrer">{p.name}</a>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(p.difficulty)}`}>
                      {p.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  );
};

export default TwoPointers;
