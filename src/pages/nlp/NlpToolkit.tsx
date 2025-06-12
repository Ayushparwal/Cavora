import React from "react";
import { FileText } from "lucide-react";

const nlpTopics = [
  { title: "Text Preprocessing", path: "/nlp/text-preprocessing/notes.txt" },
  { title: "Tokenization", path: "/nlp/tokenization/notes.txt" },
  { title: "POS Tagging", path: "/nlp/pos-tagging/notes.txt" },
  { title: "Named Entity Recognition (NER)", path: "/nlp/ner/notes.txt" },
  { title: "Sentiment Analysis", path: "/nlp/sentiment-analysis/notes.txt" },
  { title: "Text Classification", path: "/nlp/text-classification/notes.txt" },
];

const NlpToolkit = () => {
  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-cyan-400">
          NLP Toolkit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nlpTopics.map((topic, index) => (
            <a
              key={index}
              href={topic.path}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-cyan-900 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-indigo-700 dark:text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">
                  {topic.title}
                </h4>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Access notes for {topic.title}.
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NlpToolkit;
