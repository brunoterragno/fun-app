import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("renders login with default state", async () => {
  render(<Login />);

  const inputName = await screen.findByPlaceholderText("Name");
  const inputPass = await screen.findByPlaceholderText("Pass");
  const buttonLog = await screen.findByText("Log");

  expect(inputName).toBeInTheDocument();
  expect(inputPass).toBeInTheDocument();
  expect(buttonLog).toBeInTheDocument();
});

test("renders button with Clicked! message when one click", async () => {
  render(<Login />);

  // click action
  const button = await screen.findByText("Log");
  fireEvent.click(button);

  const message = await screen.findByText("Logged!");
  expect(message).toBeInTheDocument();
});
