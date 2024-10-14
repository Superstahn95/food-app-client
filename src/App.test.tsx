// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

function sum(a: number, b: number) {
  return a + b;
}

describe("sum", () => {
  it("returns the correct sum when two numbers are passed", () => {
    expect(sum(2, 2)).toBe(4);
  });
});

describe("app", () => {
  it("returns content of my app", () => {
    // arrange => act => expect
    render(<App />);
    const h1element = screen.getByRole("heading", { level: 1 });
    expect(h1element).toBeInTheDocument();
    expect(h1element).toHaveTextContent("My vite typescript app");
  });
});
