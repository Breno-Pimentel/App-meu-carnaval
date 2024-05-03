/* eslint-disable no-unused-vars */

import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function FeedbackForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email.includes("@") &&
      formData.email.includes(".com") &&
      formData.message
    ) {
      onSubmit(formData);
      setError(""); // Limpa o erro se os campos estiverem preenchidos corretamente
    } else {
      setError("Please fill in all fields correctly");
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {error && <div>{error}</div>} {/* Mostra o erro, se houver */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
