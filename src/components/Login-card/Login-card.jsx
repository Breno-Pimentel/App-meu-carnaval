/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formData.password.length >= 8) {
      onSubmit(formData);
      setError(''); // Limpa o erro se a senha estiver correta
    } else {
      setError('Password must have at least 8 characters');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        {error && <div>{error}</div>} {/* Mostra o erro, se houver */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
