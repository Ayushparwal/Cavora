import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UploadCloud, FileText, FileBarChart2 } from "lucide-react";

const ProjectPage = () => {
  const { projectName } = useParams();
  const [file, setFile] = useState<File | null>(null);
  const [problemType, setProblemType] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleStartAnalysis = () => {
    if (!file || !problemType) return alert("Please upload a file and select problem type.");
    console.log("🚀 Starting Analysis for:", { file, problemType });
    // You can now upload to backend, parse CSV, or run ML model
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        <br/>
        Project: <span className="text-blue-600">{projectName}</span>
      </h1>

      {/* Upload */}
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Upload your dataset (CSV)
          </label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          />
          {file && (
            <div className="mt-2 text-sm text-green-600 flex items-center gap-2">
              <FileText size={18} /> {file.name}
            </div>
          )}
        </div>

        {/* Problem Type */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            What kind of ML problem is this?
          </label>
          <select
            value={problemType}
            onChange={(e) => setProblemType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          >
            <option value="">Select Problem Type</option>
            <option value="classification">Classification</option>
            <option value="regression">Regression</option>
            <option value="clustering">Clustering</option>
          </select>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStartAnalysis}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        >
          <UploadCloud className="inline-block mr-2" size={20} />
          Start Analysis
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
