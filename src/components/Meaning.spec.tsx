import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Meaning from "./Meaning"; // Adjust path if necessary

it("should render the number and word correctly", () => {
  render(<Meaning number={7} word="Apples" />);

  // Check if the number and word are in the document
  expect(screen.getByText("7")).toBeInTheDocument();
  expect(screen.getByText("Apples")).toBeInTheDocument();
});
