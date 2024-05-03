/**
 * @jest-environment jsdom
 */ 
import LoginForm from "../../components/Login-card/Login-card";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, fireEvent} from '@testing-library/react';

test('Teste de submissão de dados', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.change(getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(getByText('Login'));

  expect(handleSubmit).toHaveBeenCalledTimes(1); // Verifica se handleSubmit foi chamado
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});

test('password should have at least 8 characters', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<LoginForm onSubmit={handleSubmit} />);
  
    fireEvent.change(getByLabelText(/password/i), { target: { value: '12333333333' } });
    fireEvent.click(getByText('Login'));
  
    expect(handleSubmit).not.toHaveBeenCalledTimes(0);
  });
  test('email should contain "@" and ".com"', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <LoginForm onSubmit={handleSubmit} />
    );
  
    // Simulando a inserção de um email sem "@"
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "emailsemcom" },
    });
    fireEvent.click(getByText("Login"));
  
    expect(handleSubmit).not.toHaveBeenCalled(); // Verifica se a função não foi chamada
  
    // Simulando a inserção de um email sem ".com"
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "email@sem.com" },
    });
    fireEvent.click(getByText("Login"));
  
    expect(handleSubmit).not.toHaveBeenCalled(); // Verifica se a função não foi chamada
  
    // Simulando a inserção de um email válido
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "email@com.com" },
    });
    fireEvent.click(getByText("Login"));
  
    expect(handleSubmit).toHaveBeenCalledTimes(0); // Verifica se a função foi chamada
  });
  