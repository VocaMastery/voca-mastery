import type { FC } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

interface Props {
  number: number;
  word: string;
}

const Meaning: FC<Props> = ({ number, word }) => {
  return (
    <Flex align="center">
      <Box
        width="15px"
        height="15px"
        borderRadius="50%"
        bg="brand.primary"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize="10px"
        fontWeight="bold"
        mr="10px"
      >
        {number}
      </Box>
      <Text fontSize="15px" color="#FFFFFF" fontWeight="medium">
        {word}
      </Text>
    </Flex>
  );
};

export default Meaning;
