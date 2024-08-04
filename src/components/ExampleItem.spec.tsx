import { Accordion } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import type { ComponentPropsWithoutRef } from "react";
import { expect, test } from "vitest";
import ExampleItem from "./ExampleItem";

const renderComponent = (
  props: Partial<ComponentPropsWithoutRef<typeof ExampleItem>> = {}
) => {
  render(
    <ExampleItem
      meaning="sample meaning"
      sentence="sample sentence"
      highlights={["sentence"]}
      {...props}
    />,
    {
      wrapper: Accordion,
    }
  );
};

test("Text passed as 'meaning' should be rendered.", () => {
  // Arrange
  const meaning = "문제를 일으키다";
  renderComponent({ meaning });

  // Act
  // Assert
  expect(screen.getByText("문제를 일으키다")).toBeInTheDocument();
});

test("Sentence passed as 'sentence' should be rendered", () => {
  // Arrange
  const sentence = "My computer is acting up again.";
  renderComponent({ sentence });

  // Act
  // Assert
  expect(screen.getByText(sentence)).toBeInTheDocument();
});

test("texts passed as 'highlights' should be highlighted", () => {
  // Arrange
  const highlightingTexts = ["My computer", "again"];
  renderComponent({
    sentence: "My computer is acting up again",
    highlights: highlightingTexts,
  });

  // Act
  // Assert
  highlightingTexts.forEach((highlightingText) => {
    expect(screen.getByText(highlightingText).tagName).toBe("STRONG");
  });
});
