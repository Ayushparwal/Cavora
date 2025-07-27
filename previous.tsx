// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Send, Copy, Check } from "lucide-react";
// import axios from "axios";
// import { useAuth } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

// const TryOut = () => {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [displayedOutput, setDisplayedOutput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>(
//     []
//   );
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const isRealTimeQuery = (query: string): boolean => {
//     const keywords = ["latest", "today", "now", "current", "recent"];
//     return keywords.some((word) => query.toLowerCase().includes(word));
//   };

//   const fetchWebResults = async (query: string): Promise<string> => {
//     try {
//       const response = await axios.get("https://serpapi.com/search.json", {
//         params: {
//           q: query,
//           hl: "en",
//           gl: "us",
//           api_key: import.meta.env.VITE_SERP_API_KEY,
//         },
//       });

//       const results = response.data.organic_results.slice(0, 5); // top 5 results
//       let formattedResults = results
//         .map(
//           (res: any, index: number) =>
//             `${index + 1}. ${res.title} - ${res.link}`
//         )
//         .join("\n");

//       return `Search results for "${query}":\n${formattedResults}`;
//     } catch (error) {
//       console.error("SerpAPI error:", error);
//       return "⚠️ Unable to fetch real-time results.";
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     setIsLoading(true);
//     setOutput("");
//     setDisplayedOutput("");

//     try {
//       const userMessage = { role: "user", content: input };
//       const updatedMessages = [...messages, userMessage];

//       // Keep last 10 messages for context
//       let contextMessages = updatedMessages.slice(-10);

//       if (isRealTimeQuery(input)) {
//   const webResults = await fetchWebResults(input);
//   contextMessages = [
//     {
//       role: "system",
//       content: `You are a real-time AI assistant. Use ONLY the information from the following search results to answer the user query. If the question is about a real-time fact (like prices, news, weather), do NOT say you don't know. Summarize and present the most accurate answer based on this data:\n\n${webResults}\n\nReturn the final answer clearly with sources if possible.`
//     },
//     ...contextMessages,
//   ];
// }

//       const response = await axios.post(
//         "https://api.groq.com/openai/v1/chat/completions",
//         {
//           model: "llama-3.3-70b-versatile",
//           messages: contextMessages,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${import.meta.env.VITE_GROQ_API}`,
//           },
//         }
//       );

//       const data = response.data;
//       let aiResponse = "⚠️ No response from AI. Please try again.";

//       if (data.choices && data.choices.length > 0) {
//         aiResponse = data.choices[0].message.content;
//       }

//       setMessages(
//         updatedMessages.concat({ role: "assistant", content: aiResponse })
//       );
//       setOutput(aiResponse);
//     } catch (err) {
//       console.error("LLM error:", err);
//       setOutput("⚠️ Something went wrong. Please try again later.");
//     }

//     setInput("");
//     setIsLoading(false);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(output);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   useEffect(() => {
//     if (!output) return;
//     if (timerRef.current) clearInterval(timerRef.current);
//     setDisplayedOutput("");

//     const words = output.split(" ");
//     let index = 0;

//     timerRef.current = setInterval(() => {
//       setDisplayedOutput((prev) => {
//         const nextChunk = words.slice(index, index + 10).join(" ");
//         index += 10;
//         if (index >= words.length && timerRef.current) {
//           clearInterval(timerRef.current);
//         }
//         return prev + (prev ? " " : "") + nextChunk;
//       });
//     }, 200);

//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [output]);

//   return (
//     <section id="tryout" className="py-28 bg-white dark:bg-gray-900">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 px-2"
//         >
//           <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight text-gray-800 dark:text-white">
//             Welcome to{" "}
//             <span className="text-blue-700 dark:text-blue-400">Cavora</span>
//           </h2>
//           <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//             Power intelligent search and deep research with{" "}
//             <span className="font-semibold text-black dark:text-white">
//               Cavora’s advanced AI insights
//             </span>
//             .
//           </p>
//         </motion.div>

//         {/* If user is NOT logged in */}
//         {!user && (
//           <div className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <p className="text-gray-700 dark:text-gray-300 mb-4">
//               You must be logged in to use this feature.
//             </p>
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//             >
//               Login Now
//             </button>
//           </div>
//         )}

//         {/* If user IS logged in */}
//         {user && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 mt-6"
//           >
//             <form onSubmit={handleSubmit} className="mb-6">
//               <div className="relative">
//                 <textarea
//                   rows={3}
//                   className="w-full p-4 pr-12 text-sm rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                   placeholder="Ask me anything..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   disabled={!user} // disable typing when not logged in
//                 ></textarea>
//                 <button
//                   type="submit"
//                   disabled={isLoading || !input.trim()}
//                   className="absolute right-3 bottom-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition duration-300 disabled:opacity-50"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </form>

//             {displayedOutput && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="text-base font-semibold text-gray-900 dark:text-white">
//                     Response:
//                   </h3>
//                   <button
//                     onClick={copyToClipboard}
//                     className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
//                   >
//                     {copied ? (
//                       <Check className="h-4 w-4 text-green-500" />
//                     ) : (
//                       <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//                 <div
//                   className="whitespace-pre-wrap text-left text-gray-800 dark:text-gray-100 leading-relaxed text-sm font-normal space-y-2"
//                   dangerouslySetInnerHTML={{
//                     __html: displayedOutput
//                       .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//                       .replace(/\*(?!\*)(.*?)\*/g, "<strong>$1</strong>")
//                       .replace(
//                         /`(.*?)`/g,
//                         "<code class='bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs'>$1</code>"
//                       )
//                       .replace(/\n/g, "<br/>"),
//                   }}
//                 ></div>
//               </motion.div>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TryOut;