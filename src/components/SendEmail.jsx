import { useState } from "react";
import emailjs from "emailjs-com";

export default function SendEmail() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "seu_service_id_aqui",   // ← Substitua pelo seu Service ID
        "seu_template_id_aqui",  // ← Substitua pelo seu Template ID
        {
          from_name: form.nome,
          from_email: form.email,
          message: form.mensagem,
        },
        "seu_user_id_aqui"       // ← Substitua pelo seu User ID
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", mensagem: "" });
      })
      .catch(() => {
        setStatus("Erro ao enviar a mensagem.");
      });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Enviar
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
