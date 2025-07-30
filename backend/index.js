require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const contextos = {};

app.post("/chat", async (req, res) => {
  const { userId, mensagem } = req.body;
  if (!userId || !mensagem) return res.status(400).json({ error: "Faltam dados" });
  
  if (!contextos[userId]) {
    contextos[userId] = [
      { role: "system", content: "Você é o Bra.IA, um assistente de IA inteligente e prestativo. Você utiliza servidores da META (Llama) para processar as informações. Seu objetivo é ser um assistente versátil e ajudar os usuários com múltiplas tarefas, desde perguntas simples até questões complexas. Sempre se identifique como Bra.IA quando perguntado sobre quem você é. Responda sempre em português de forma clara, educada e objetiva. IMPORTANTE: Organize suas respostas em tópicos usando marcadores (-) ou listas numeradas sempre que possível para facilitar o entendimento. Use quebras de linha e espaçamento adequado. Quando o usuário enviar arquivos, analise seu conteúdo e forneça feedback útil. Quando criar código ou conteúdo que pode ser salvo como arquivo, use blocos de código com a linguagem apropriada (```linguagem) para que o usuário possa fazer download facilmente." }
    ];
  }
  contextos[userId].push({ role: "user", content: mensagem });
  
  const payload = {
    model: "meta-llama/llama-3-8b-instruct",
    messages: contextos[userId].map(m => ({ role: m.role, content: m.content })),
    temperature: 0.5,
    max_tokens: 2000
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
app.listen(3001, "172.16.31.176", () => {
  console.log("Servidor rodando em http://172.16.31.176:3001");
});
