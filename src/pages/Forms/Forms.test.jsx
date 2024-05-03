/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FeedbackForm from "../../components/Login-card/Feedback-card";

test("submitting the form with all fields filled correctly calls onSubmit with the correct data", () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <FeedbackForm onSubmit={handleSubmit} />
  );

  fireEvent.change(getByLabelText(/name/i), { target: { value: "John Doe" } });
  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(getByLabelText(/message/i), {
    target: { value: "This is a test message" },
  });
  fireEvent.click(getByText("Submit"));

  expect(handleSubmit).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@example.com",
    message: "This is a test message",
  });
});

test("submitting the form with empty fields does not call onSubmit", () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<FeedbackForm onSubmit={handleSubmit} />);

  fireEvent.click(getByText("Submit"));

  expect(handleSubmit).not.toHaveBeenCalled();
});

test("submitting the form with invalid email does not call onSubmit", () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <FeedbackForm onSubmit={handleSubmit} />
  );

  fireEvent.change(getByLabelText(/name/i), { target: { value: "John Doe" } });
  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "invalidemail" },
  });
  fireEvent.change(getByLabelText(/message/i), {
    target: { value: "This is a test message" },
  });
  fireEvent.click(getByText("Submit"));

  expect(handleSubmit).not.toHaveBeenCalled();
});
