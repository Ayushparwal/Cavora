import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UploadCloud, FileText } from "lucide-react";
import Papa, { ParseResult } from "papaparse";

type RowType = Record<string, string>;

const ProjectPage = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const [file, setFile] = useState<File | null>(null);
  const [problemType, setProblemType] = useState<string>("");
  const [targetColumn, setTargetColumn] = useState<string>("");
  const [automlFramework, setAutomlFramework] = useState<string>("");
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const [dataPreview, setDataPreview] = useState<RowType[]>([]);
  const [dataInfo, setDataInfo] = useState<{
    shape: string;
    size: number;
  } | null>(null);
  const [isParsing, setIsParsing] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleParseFile = () => {
    if (!file) return alert("Please upload a file first.");

    setIsParsing(true);

    Papa.parse<RowType>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<RowType>) => {
        const rows = results.data;
        if (rows.length === 0) {
          alert("Empty file.");
          setIsParsing(false);
          return;
        }

        const shape = `${rows.length} rows × ${Object.keys(rows[0]).length} columns`;
        const size = rows.length * Object.keys(rows[0]).length;

        setColumnNames(Object.keys(rows[0]));
        setDataPreview(rows.slice(0, 5));
        setDataInfo({ shape, size });
        setIsParsing(false);
      },
      error: (err: Papa.ParseError) => {
        alert("Failed to parse CSV.");
        console.error(err);
        setIsParsing(false);
      },
    });
  };

  const handleStartAnalysis = async () => {
    if (!file || !problemType || !targetColumn || !automlFramework) {
      alert("Please complete all fields before starting analysis.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("problem_type", problemType);
    formData.append("target_column", targetColumn);
    formData.append("automl_framework", automlFramework);

    try {
      const res = await fetch("http://localhost:8000/train", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("🎯 AutoML Result:", result);

      alert(
        `Best model: ${result.best_model}\nMetric: ${result["Accuracy/Metric"]}`
      );
    } catch (error) {
      console.error("❌ Error in analysis:", error);
      alert("Something went wrong during analysis.");
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Project: <span className="text-blue-600">{projectName}</span>
      </h1>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
        {/* Upload Section */}
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
          {file && (
            <div className="mt-3 w-full">
              {isParsing ? (
                <div className="flex justify-center items-center py-2">
                  <svg
                    className="animate-spin h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Parsing...</span>
                </div>
              ) : (
                <button
                  onClick={handleParseFile}
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition"
                >
                  Parse File
                </button>
              )}
            </div>
          )}
        </div>

        {/* Show options only after file is parsed */}
        {columnNames.length > 0 && (
          <>
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

            {/* Target Column */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Select the target column
              </label>
              <select
                value={targetColumn}
                onChange={(e) => setTargetColumn(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              >
                <option value="">Select Target Column</option>
                {columnNames.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </select>
            </div>

            {/* AutoML Framework */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Select AutoML Framework
              </label>
              <select
                value={automlFramework}
                onChange={(e) => setAutomlFramework(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              >
                <option value="">Select AutoML Framework</option>
                <option value="pycaret">PyCaret</option>
                <option value="evalml">EvalML</option>
                <option value="h2o">H2O.ai</option>
                <option value="flaml">FLAML</option>
                <option value="autosklearn">Auto-sklearn</option>
              </select>
            </div>
          </>
        )}

        {/* Start Analysis Button */}
        <button
          onClick={handleStartAnalysis}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        >
          <UploadCloud className="inline-block mr-2" size={20} />
          Start Analysis
        </button>

        {/* Data Info */}
        {dataInfo && (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 space-y-2 text-sm">
            {targetColumn && (
              <div>
                📍 <strong>Target Column:</strong>{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  {targetColumn}
                </code>
              </div>
            )}
            <div>
              🔢 <strong>Shape:</strong> {dataInfo.shape}
            </div>
            <div>
              📦 <strong>Size:</strong> {dataInfo.size} cells
            </div>
          </div>
        )}

        {/* Preview */}
        {dataPreview.length > 0 && (
          <div className="overflow-auto mt-4">
            <table className="w-full border border-gray-300 dark:border-gray-700 text-sm">
              <thead>
                <tr>
                  {Object.keys(dataPreview[0]).map((key) => (
                    <th
                      key={key}
                      className="border px-2 py-1 bg-gray-200 dark:bg-gray-700"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataPreview.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i} className="border px-2 py-1">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;