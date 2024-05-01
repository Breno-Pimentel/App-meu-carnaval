import { render, fireEvent, screen } from '@testing-library/react';
import FormsCard from '../../components/Login-card/Feedback-card';
import React from 'react';
describe('FormsCard component', () => {
  test('renders feedback form with input fields and submit button', () => {
    render(<FormsCard />);
    expect(screen.getByText('Deixe-nos o seu feedback')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome:')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensagem:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar Feedback' })).toBeInTheDocument();
  });

  test('submits form with user input values', () => {
    render(<FormsCard />);
    const nameInput = screen.getByLabelText('Nome:');
    const emailInput = screen.getByLabelText('E-mail:');
    const messageInput = screen.getByLabelText('Mensagem:');
    const submitButton = screen.getByRole('button', { name: 'Enviar Feedback' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
    fireEvent.click(submitButton);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
    expect(window.alert).toHaveBeenCalledWith('Feedback enviado com sucesso!');
  });

  test('validates minimum password length', () => {
    render(<FormsCard />);
    const passwordInput = screen.getByLabelText('Senha:');
    const submitButton = screen.getByRole('button', { name: 'Enviar Feedback' });

    fireEvent.change(passwordInput, { target: { value: 'abc' } });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('A senha deve conter no mínimo 6 caracteres.');

    fireEvent.change(passwordInput, { target: { value: 'abcdef' } });
    fireEvent.click(submitButton);

    expect(window.alert).not.toHaveBeenCalledWith('A senha deve conter no mínimo 6 caracteres.');
  });

  test('validates email format', () => {
    render(<FormsCard />);
    const emailInput = screen.getByLabelText('E-mail:');
    const submitButton = screen.getByRole('button', { name: 'Enviar Feedback' });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Por favor, insira um endereço de e-mail válido.');

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.click(submitButton);

    expect(window.alert).not.toHaveBeenCalledWith('Por favor, insira um endereço de e-mail válido.');
  });
});
