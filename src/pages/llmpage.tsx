import React from "react";

const LLMPage = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <br></br>
        <h1 className="text-4xl font-bold mb-6">🧠 Large Language Models (LLMs)</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Large Language Models (LLMs) are AI systems trained to understand and generate human language.
          They’ve revolutionized the way we interact with technology — powering everything from chatbots and coding assistants to content creators and search engines.
        </p>

        {/* Section 1: What are LLMs */}
        <h2 className="text-3xl font-bold mb-4">What are Large Language Models?</h2>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          LLMs are a class of deep learning models trained on vast datasets of human text. These models learn grammar, reasoning, world knowledge, and patterns in language — enabling them to write coherent essays, answer questions, generate code, and even carry on conversations.
        </p>

        {/* Section 2: Why LLMs Matter */}
        <h3 className="text-2xl font-semibold mt-8 mb-2">Why are LLMs so powerful?</h3>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Scale:</strong> Trained on trillions of tokens with billions of parameters.</li>
          <li><strong>Flexibility:</strong> One model can solve tasks from code generation to customer support.</li>
          <li><strong>Reasoning:</strong> Through chain-of-thought prompting and large-scale training.</li>
        </ul>

        {/* Section 3: Popular LLMs */}
        <h3 className="text-2xl font-semibold mt-8 mb-2">Popular LLMs in 2024–25</h3>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
          <li><a href="https://openai.com/gpt-4" className="text-indigo-500 underline" target="_blank">GPT-4 / GPT-4o</a> (OpenAI)</li>
          <li><a href="https://www.anthropic.com/index/introducing-claude" className="text-indigo-500 underline" target="_blank">Claude 3</a> (Anthropic)</li>
          <li><a href="https://deepmind.google/technologies/gemini/" className="text-indigo-500 underline" target="_blank">Gemini</a> (Google)</li>
          <li><a href="https://ai.meta.com/llama/" className="text-indigo-500 underline" target="_blank">LLaMA 3</a> (Meta)</li>
          <li><a href="https://mistral.ai/news/announcing-mixtral/" className="text-indigo-500 underline" target="_blank">Mistral / Mixtral</a></li>
        </ul>

        {/* Section 4: Risks & Ethics */}
        <h3 className="text-2xl font-semibold mt-10 mb-2">⚠️ Risks, Security & Ethics</h3>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
          <li><a href="https://arxiv.org/abs/2302.12036" className="text-red-500 underline" target="_blank">Hallucination</a>: Incorrect but confident outputs.</li>
          <li><a href="https://arxiv.org/abs/2304.07852" className="text-red-500 underline" target="_blank">LLM Hijacking</a>: Adversarial control of outputs.</li>
          <li><a href="https://arxiv.org/abs/2004.07213" className="text-red-500 underline" target="_blank">Data Poisoning</a>: Corrupting training datasets.</li>
          <li><a href="https://arxiv.org/abs/2301.11736" className="text-red-500 underline" target="_blank">Prompt Injection</a>: Circumventing rules or alignment.</li>
          <li><a href="https://arxiv.org/abs/2303.15343" className="text-red-500 underline" target="_blank">Data Leakage</a>: Exposing sensitive information.</li>
          <li><a href="https://huggingface.co/blog/alignment" className="text-red-500 underline" target="_blank">AI Alignment</a>: Matching models to human values.</li>
        </ul>

        {/* Section 5: Blog Posts */}
        <h3 className="text-2xl font-semibold mt-10 mb-2">📖 Recommended Blog Posts & Readings</h3>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 dark:text-gray-300">
          <li><a href="https://openai.com/research" className="text-blue-500 underline" target="_blank">OpenAI Research Blog</a></li>
          <li><a href="https://www.anthropic.com/index" className="text-blue-500 underline" target="_blank">Claude Insights</a></li>
          <li><a href="https://huggingface.co/blog" className="text-blue-500 underline" target="_blank">HuggingFace Blog</a></li>
          <li><a href="https://arxiv.org/search/?query=large+language+models&searchtype=all" className="text-blue-500 underline" target="_blank">arXiv LLMs</a></li>
          <li><a href="https://distill.pub/" className="text-blue-500 underline" target="_blank">Distill: Visual AI Learning</a></li>
        </ul>

        {/* Section 6: Semantic Example */}
        <div className="mt-10 border border-gray-300 dark:border-gray-700 rounded-xl p-6 space-y-4 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold">🔍 Semantic Meaning & Context Awareness</h2>
          <p className="text-gray-700 dark:text-gray-300">
            LLMs go beyond keyword matching — they understand the <strong>meaning</strong> behind phrases and adapt to the <strong>context</strong> of a conversation.
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">💬 Input:</p>
            <pre className="bg-white dark:bg-gray-900 p-3 rounded-lg text-sm text-black dark:text-white whitespace-pre-wrap">
              “Can you tell me about Mercury?”
            </pre>

            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-4 mb-2">🤖 LLM Responses (based on context):</p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 text-sm space-y-1">
              <li><strong>Space:</strong> “Mercury is the closest planet to the Sun.”</li>
              <li><strong>Health:</strong> “Mercury is a toxic heavy metal found in thermometers.”</li>
              <li><strong>Cars:</strong> “Mercury was a discontinued automobile brand by Ford.”</li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            This semantic flexibility makes LLMs effective across industries like healthcare, law, education, and research.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LLMPage;
