import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import { Copy, Share2, Maximize } from "lucide-react";

const languageMap: Record<string, number> = {
  python: 71,
  cpp: 54,
  java: 62,
  javascript: 63,
};

const monacoLanguageMap: Record<string, string> = {
  python: "python",
  cpp: "cpp",
  java: "java",
  javascript: "javascript",
};
const apiKey = import.meta.env.VITE_JUDGE0_KEY;

const Runcode = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const editorRef = useRef(null);

  const handleCodeRun = async () => {
    setLoading(true);
    setOutput("");
    setError("");

    const encodedSourceCode = btoa(code);

    try {
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
          body: JSON.stringify({
            source_code: encodedSourceCode,
            language_id: languageMap[language],
          }),
        }
      );

      const result = await response.json();

      const finalOutput =
        atob(result.stdout || "") ||
        result.stderr ||
        result.compile_output ||
        "⚠️ No Output Returned.";

      setOutput(finalOutput);
    } catch (err) {
      setError("❌ Failed to execute code. Please try again.");
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert("✅ Code copied to clipboard!");
    });
  };

  const handleShare = () => {
    const url = `${
      window.location.href.split("?")[0]
    }?code=${encodeURIComponent(btoa(code))}&lang=${language}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("🔗 Shareable link copied to clipboard!");
    });
  };

  const handleFullscreen = () => {
    document.documentElement.requestFullscreen?.();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        handleCodeRun();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [code, language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 py-12 text-gray-900 dark:text-white">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        <br />
        Run Your Code 
      </motion.h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Code Editor */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full sm:w-60 rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700 border dark:border-gray-600 focus:outline-none"
              >
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
              </select>

              <div className="flex gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                >
                  <Share2 size={16} />
                  Share
                </button>
                <button
                  onClick={handleFullscreen}
                  className="flex items-center gap-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                >
                  <Maximize size={16} />
                  Fullscreen
                </button>
              </div>
            </div>

            <div className="relative">
              <Editor
                height="360px"
                language={monacoLanguageMap[language]}
                value={code}
                theme="vs-dark"
                onChange={(value) => setCode(value || "")}
                options={{
                  fontSize: 16,
                  fontFamily: "Fira Code, monospace",
                  minimap: { enabled: false },
                  lineNumbers: "on",
                  wordWrap: "on",
                  scrollBeyondLastLine: false,
                  formatOnType: true,
                  automaticLayout: true,
                }}
              />
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg text-white"
              >
                <Copy size={16} />
              </button>
            </div>

            <div className="relative inline-block group">
              <button
                onClick={handleCodeRun}
                disabled={loading}
                className="px-6 py-2 bg-blue-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
              >
                {loading ? "Running..." : "Run Code"}
              </button>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {navigator.platform.includes("Mac")
                  ? "Cmd+Enter"
                  : "Ctrl+Enter"}
              </div>
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 p-4 rounded-lg mt-2">
                {error}
              </div>
            )}
          </div>

          {/* Output */}
          <div className="w-full lg:w-1/2 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-5">Output : </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(output);
                    alert("✅ Output copied to clipboard!");
                  }}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg flex items-center gap-1"
                >
                  <Copy size={14} />
                  Copy
                </button>
                <button
                  onClick={() => setOutput("")}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg h-[360px] overflow-y-auto whitespace-pre-wrap text-sm">
              {output ? (
                output
              ) : (
                <span className="text-gray-400 dark:text-gray-500 italic">
                  Your output...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Runcode;
