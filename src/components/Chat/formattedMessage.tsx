import React, { useEffect } from "react";

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

const addEmojis = (text: string) => {
  return text.replace(
    new RegExp(`\\b(${Object.keys(emojiMap).join("|")})\\b`, "gi"),
    (match) => `${match} ${emojiMap[match.toLowerCase()]}`
  );
};

const FormattedMessage: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    const copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const code = button.getAttribute("data-code") || "";
        navigator.clipboard.writeText(code);
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      });
    });
  }, [content]);

  const enhancedContent = addEmojis(content);

  const formattedHTML = enhancedContent
    // Headings
    .replace(/^#\s(.+)$/gm, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
    .replace(/^##\s(.+)$/gm, '<h2 class="text-xl font-semibold mb-3">$1</h2>')
    .replace(/^###\s(.+)$/gm, '<h3 class="text-lg font-medium mb-2">$1</h3>')

    // Markdown links
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="text-blue-600 underline" target="_blank" rel="noopener noreferrer">$1</a>')

    // Raw URLs
    .replace(/(?<!\]\()https?:\/\/[^\s<]+/g, (url) => {
      const hostname = new URL(url).hostname.replace("www.", "");
      return `
<div class="my-4 p-3 border rounded-md shadow-sm">
  <a href="${url}" target="_blank" rel="noopener noreferrer" class="block">
    <div class="text-sm text-blue-600 truncate">${url}</div>
    <div class="text-xs text-gray-600">🔗 ${hostname}</div>
  </a>
</div>`;
    })

    // Inline math
    .replace(/\$\$([^$]+)\$\$/g, (_, expr) => `<span class="text-purple-600 font-mono">\\(${expr}\\)</span>`)

    // Bullet points with •
    .replace(/^(?:[-+])\s+(.*)/gm, '<li class="relative pl-6 before:content-[\'•\'] before:absolute before:left-0 before:text-xl before:top-0.5 before:text-gray-500">$1</li>')
    .replace(/(<li.*?<\/li>)/gs, '<ul class="pl-4 space-y-1 list-none">$1</ul>')

    // Subpoints as Roman numerals (like i. ii. iii.)
    .replace(/^\s*(i{1,3}|iv|v|vi|vii|viii|ix|x)\.\s+(.*)/gim, '<li class="ml-8 list-[lower-roman]">$2</li>')
    .replace(/(<li class="ml-8.*?<\/li>)/gs, '<ol class="pl-8">$1</ol>')

    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(?!\*)(.*?)\*/g, '<em>$1</em>')

    // Line breaks (ignore if inside block elements)
    .replace(/(?<!<\/(ul|ol|h\d|div)>)\n/g, '<br/>');

  return (
    <div
      className="text-gray-900 dark:text-gray-100 text-base leading-relaxed"
      dangerouslySetInnerHTML={{ __html: formattedHTML }}
    />
  );
};

export default FormattedMessage;
