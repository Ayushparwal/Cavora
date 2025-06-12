import React from "react";

const slidingWindowProblems = [
  {
    name: "Max Consecutive Ones",
    link: "https://leetcode.com/problems/max-consecutive-ones/",
    difficulty: "Easy",
  },
  {
    name: "Maximum Average Subarray I",
    link: "https://leetcode.com/problems/sliding-window-maximum-average/",
    difficulty: "Easy",
  },
  {
    name: "Minimum Size Subarray Sum",
    link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    difficulty: "Easy",
  },
  {
    name: "Max Vowels in a Substring",
    link: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
    difficulty: "Easy",
  },
  {
    name: "Find All Anagrams",
    link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    difficulty: "Easy",
  },
  {
    name: "Longest Substring with K Distinct Chars",
    link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
    difficulty: "Medium",
  },
  {
    name: "Fruit Into Baskets",
    link: "https://leetcode.com/problems/fruit-into-baskets/",
    difficulty: "Medium",
  },
  {
    name: "Permutation in String",
    link: "https://leetcode.com/problems/permutation-in-string/",
    difficulty: "Medium",
  },
  {
    name: "Longest Repeating Character Replacement",
    link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    difficulty: "Medium",
  },
  {
    name: "Max Points From Cards",
    link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    difficulty: "Medium",
  },
  {
    name: "Sliding Window Maximum",
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    difficulty: "Hard",
  },
  {
    name: "Longest Substring with Two Distinct Chars",
    link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
    difficulty: "Hard",
  },
  {
    name: "Count Nice Subarrays",
    link: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    difficulty: "Hard",
  },
  {
    name: "Maximum Erasure Value",
    link: "https://leetcode.com/problems/maximum-erasure-value/",
    difficulty: "Hard",
  },
  {
    name: "Substrings With All 3 Chars",
    link: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    difficulty: "Hard",
  },
];

const getBadgeColor = (difficulty: string) => {
  if (difficulty === "Easy") return "bg-green-700 text-white";
  if (difficulty === "Medium") return "bg-yellow-500 text-black";
  if (difficulty === "Hard") return "bg-red-600 text-white";
  return "bg-gray-500 text-white";
};

const SlidingWindow = () => {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-cyan-400">
          🚪 Sliding Window Technique
        </h1>

        <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
          The <strong>Sliding Window</strong> technique is a powerful strategy used to reduce time complexity for problems that involve arrays or strings. It involves creating a window which can either be fixed or variable in size and sliding it across the array to compute results dynamically.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">🧠 Key Concept</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By maintaining a window and updating the result as the window slides, we avoid recalculating results from scratch each time. This often brings time complexity down from <code>O(n²)</code> to <code>O(n)</code>.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-gray-900 dark:text-white">📚 Learn More</h2>
        <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 underline space-y-2">
          <li><a href="https://leetcode.com/tag/sliding-window/" target="_blank">LeetCode: Sliding Window Problems</a></li>
          <li><a href="https://www.geeksforgeeks.org/window-sliding-technique/" target="_blank">GeeksForGeeks: Sliding Window Technique</a></li>
          <li><a href="https://medium.com/swlh/sliding-window-technique-with-javascript-c364ec62c3b7" target="_blank">Medium Blog: Sliding Window in JS</a></li>
          <li><a href="https://www.youtube.com/watch?v=MK-NZ4hN7rs" target="_blank">YouTube: Sliding Window Explanation</a></li>
          <li><a href="https://visualgo.net/en" target="_blank">VisuAlgo: Data Structure Animations</a></li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">🔥 Top 20 Sliding Window Problems</h2>
        <div className="overflow-x-auto text-sm text-gray-200">
          <table className="min-w-full bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Problem</th>
                <th className="px-4 py-3 text-center">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {slidingWindowProblems.map((p, i) => (
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

export default SlidingWindow;
