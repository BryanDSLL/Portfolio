"use client";

import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  async function enviar() {
    if (!msg.trim()) return;
    const userId = "usuario1";
    const res = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, mensagem: msg })
    });
    const data = await res.json();
    setChat((prev) => [
      ...prev,
      { autor: "Você", texto: msg },
      { autor: "Bot", texto: data.resposta }
    ]);
    setMsg("");
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div id="chat" style={{ width: 400, minHeight: 200, background: '#f5f5f5', borderRadius: 8, padding: 16, marginBottom: 16, overflowY: 'auto', boxShadow: '0 2px 8px #0001' }}>
        {chat.map((item, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <b>{item.autor}:</b> {item.texto}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          id="msg"
          value={msg}
          onChange={e => setMsg(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") enviar(); }}
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc', width: 300 }}
        />
        <button onClick={enviar} style={{ padding: '8px 16px', borderRadius: 4, border: 'none', background: '#0070f3', color: '#fff', fontWeight: 'bold' }}>Enviar</button>
      </div>
    </div>
  );
}
