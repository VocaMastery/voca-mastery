import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Sample from "./Sample";

it("text should be rendered", () => {
  render(<Sample text="hello" />);

  expect(screen.getByText("hello")).toBeInTheDocument();
});
