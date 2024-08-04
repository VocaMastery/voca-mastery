import type { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

interface Props {
  text: string;
}
const Sample: FC<Props> = ({ text }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' color='brand.primary'>
              {text}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color='text.primary'>
          This is the content of section 1. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' color='brand.secondary'>
              {text}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color='text.secondary'>
          This is the content of section 2. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left' color='brand.tertiary'>
              {text}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color='text.muted'>
          This is the content of section 3. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Sample;
