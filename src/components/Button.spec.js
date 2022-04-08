import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with default message", async () => {
  render(<Button />);

  const button = await screen.findByText("Click!");
  expect(button).toBeInTheDocument();
});

test("renders button with Clicked! message when one click", async () => {
  render(<Button />);

  // click action
  const buttonBefore = await screen.findByText("Click!");
  fireEvent.click(buttonBefore);

  const buttonAfter = await screen.findByText("Clicked!");
  expect(buttonAfter).toBeInTheDocument();
});

test("renders button with Click! message when two clicks", async () => {
  render(<Button />);

  // click action
  const buttonBefore = await screen.findByText("Click!");
  // console.log(buttonBefore.outerHTML);
  fireEvent.click(buttonBefore);
  fireEvent.click(buttonBefore);

  const buttonAfter = await screen.findByText("Click!");
  expect(buttonAfter).toBeInTheDocument();
});
