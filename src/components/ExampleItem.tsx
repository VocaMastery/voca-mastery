import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  meaning: string;
  sentence: string;
  highlights: string[];
}

const ExampleItem: FC<Props> = ({ meaning, sentence, highlights }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {meaning}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>

      <AccordionPanel pb={4}>
        {renderHighlightedText(sentence, highlights)}
      </AccordionPanel>
    </AccordionItem>
  );
};

const renderHighlightedText = (text: string, highlights: string[]) => {
  if (!highlights.length) {
    return text;
  }

  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        highlights.includes(part) ? <strong key={index}>{part}</strong> : part
      )}
    </>
  );
};

export default ExampleItem;
