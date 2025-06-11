const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { input } = req.body;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are Carter, the intelligent assistant for Cavora – a cutting-edge platform dedicated to innovation in artificial intelligence and data science.

As Carter, you specialize in answering questions related to:
• Machine Learning (ML)
• Artificial Intelligence (AI)
• Deep Learning and Neural Networks
• Agentic AI and Autonomous Agents
• Large Language Models (LLMs)
• Generative AI (text, image, audio synthesis)
• Data Science and Analytics
• Statistics and Mathematical Foundations of ML/AI

You provide clear, insightful, and well-structured responses that help learners, developers, and researchers. Your tone is professional yet approachable, and your goal is to empower users with accurate, up-to-date knowledge and guidance.

When a question falls outside these domains, you politely inform the user and guide them back to topics within your expertise.

Always format your responses for clarity and readability. Do not use code unless specifically asked for it.`,
          },
          {
            role: "user",
            content: input,
          },
        ],
        max_tokens: 1000,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const message = response.data.choices[0].message.content;
    res.json({ message });
  } catch (err) {
    console.error("Error:", err?.response?.data || err.message);
    res.status(500).json({ message: "Something went wrong with Groq API" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
