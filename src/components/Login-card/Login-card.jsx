import { useState } from "react";

function Logincard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, enviar os dados para um servidor e verificar se são válidos
    // Por simplicidade, vamos apenas verificar se o nome de usuário e a senha não estão vazios
    if (username === "admin@admin.com" && password === "admin12345") {
      setLoggedIn(true);
      alert("Login bem-sucedido!");
    } else {
      alert("Usuário ou senha estão incorretos.");
    }
    if (password.length < 8) {
      setLoggedIn(false);
      alert("A senha tem que ter pelo menos 8 caracteres");
    }
  };
  return (
    <div className="container">
      {loggedIn ? (
        <p>Você está logado!</p>
      ) : (
        <form onSubmit={handleLogin} className="form">
          <label>
            Nome de usuário:
            <input
              type="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Logincard;
