require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Contextos em memória (por usuário)
const contextos = {};

app.post("/chat", async (req, res) => {
  const { userId, mensagem } = req.body;
  if (!userId || !mensagem) return res.status(400).json({ error: "Faltam dados" });

  if (!contextos[userId]) contextos[userId] = [];
  contextos[userId].push({ role: "user", content: mensagem });

  // Adapta para o payload do OpenRouter (compatível com OpenAI)
  const payload = {
    model: "meta-llama/llama-3-8b-instruct", // ou outro modelo suportado
    messages: contextos[userId].map(m => ({ role: m.role, content: m.content }))
  };

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      payload,
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    const resposta = response.data.choices[0].message.content;
    contextos[userId].push({ role: "assistant", content: resposta });
    res.json({ resposta });
  } catch (err) {
    console.error('Erro detalhado:', err.response?.data || err.message);
    res.status(500).json({ error: "Erro na API OpenRouter", detalhes: err.response?.data || err.message });
  }
});

console.log("Iniciando backend com OpenRouter...");
app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
