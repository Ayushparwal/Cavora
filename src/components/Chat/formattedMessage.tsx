import React, { useEffect } from "react";
import Prism from "prismjs";

// Prism language components
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup"; // HTML is 'markup'
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

// Prism theme
import "prismjs/themes/prism-tomorrow.css";

interface Props {
  content: string;
}

const emojiMap: Record<string, string> = {
  happy: "😊",
  sad: "😢",
  success: "✅",
  error: "❌",
  warning: "⚠️",
  hello: "👋",
  goodbye: "👋",
  love: "❤️",
  fast: "⚡",
  fire: "🔥",
  idea: "💡",
  rocket: "🚀",
  coffee: "☕",
  thanks: "🙏",
  wow: "😲",
};

const addEmojis = (text: string) =>
  text.replace(
    new RegExp(`\\b(${Object.keys(emojiMap).join("|")})\\b`, "gi"),
    (match) => `${match} ${emojiMap[match.toLowerCase()]}`
  );

const FormattedMessage: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();

    // Copy to clipboard functionality
    document.querySelectorAll<HTMLButtonElement>(".copy-button").forEach((button) => {
      button.onclick = () => {
        const code = button.getAttribute("data-code") || "";
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = "Copied!";
          button.classList.remove("bg-gray-700", "hover:bg-gray-600");
          button.classList.add("bg-green-600", "hover:bg-green-500");
          setTimeout(() => {
            button.textContent = "Copy";
            button.classList.remove("bg-green-600", "hover:bg-green-500");
            button.classList.add("bg-gray-700", "hover:bg-gray-600");
          }, 2000);
        });
      };
    });
  }, [content]);

  // Regex for code blocks
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  let codeBlocks: string[] = [];

  let tempText = content.replace(
    codeBlockRegex,
    (match, lang = "plaintext", code) => {
      const escapedCode = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const blockHTML = `
<div class="relative my-4 rounded-lg overflow-hidden border border-gray-700">
  <div class="flex justify-between items-center px-3 py-2 bg-[#2d2d2d] text-gray-300 text-xs font-mono">
    <span>${lang}</span>
    <button 
      class="copy-button px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition text-xs text-white"
      data-code="${code.trim()}"
    >
      Copy
    </button>
  </div>
  <pre class="m-0 p-4 overflow-x-auto bg-[#1e1e1e] whitespace-pre">
    <code class="language-${lang}">${escapedCode}</code>
  </pre>
</div>`;
      codeBlocks.push(blockHTML);
      return `[[[CODEBLOCK_${codeBlocks.length - 1}]]]`;
    }
  );

  // Add emojis and markdown formatting
  tempText = addEmojis(tempText)
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-200 dark:bg-gray-700 text-red-600 dark:text-red-400 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
    )
    .replace(/^#\s(.+)$/gm, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
    .replace(/^##\s(.+)$/gm, '<h2 class="text-xl font-semibold mb-3">$1</h2>')
    .replace(/^###\s(.+)$/gm, '<h3 class="text-lg font-medium mb-2">$1</h3>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" class="text-blue-600 underline" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(
      /(?<!\]\()https?:\/\/[^\s<]+/g,
      (url) => {
        const hostname = new URL(url).hostname.replace("www.", "");
        return `<div class="my-4 p-3 border rounded-md shadow-sm"><a href="${url}" target="_blank" rel="noopener noreferrer" class="block"><div class="text-sm text-blue-600 truncate">${url}</div><div class="text-xs text-gray-600">🔗 ${hostname}</div></a></div>`;
      }
    )
    .replace(/^(?:[-+])\s+(.*)/gm, '<li class="pl-4 list-disc">$1</li>')
    .replace(/(<li.*?<\/li>)/gs, '<ul class="pl-4 space-y-1">$1</ul>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(?!\*)(.*?)\*/g, '<em>$1</em>')
    .replace(/(?<!<\/(ul|ol|h\d|div|pre|code)>)\n/g, '<br/>');

  // Restore code blocks
  const formattedHTML = tempText.replace(
    /\[\[\[CODEBLOCK_(\d+)\]\]\]/g,
    (_, index) => codeBlocks[Number(index)]
  );

  return (
    <div
      className="text-gray-900 dark:text-gray-100 text-base leading-relaxed"
      dangerouslySetInnerHTML={{ __html: formattedHTML }}
    />
  );
};

export default FormattedMessage;
