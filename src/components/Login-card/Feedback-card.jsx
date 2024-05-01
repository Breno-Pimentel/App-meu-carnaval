import { useState } from "react";
function FormsCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o feedback para o servidor
    // Por exemplo, enviar os dados para um endpoint de API
    console.log({ name, email, message });
    // Limpar os campos após o envio do formulário
    setName("");
    setEmail("");
    setMessage("");
    alert("Feedback enviado com sucesso!");
  };
  return (
    <div className="feedback-form">
      <h2>Deixe-nos o seu feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Feedback</button>
      </form>
    </div>
  );
}

export default FormsCard;
