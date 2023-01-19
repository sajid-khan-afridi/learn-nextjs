"use client";
import { Box, Flex } from "@chakra-ui/react";

export default function FlexBox() {
  return (
    <Flex justify="space-between" align="center">
      <Box bg="blue" w="100px" h="100px" color="white">
        item1
      </Box>
      <Box bg="green" w="100px" h="20px" color="white">
        item2
      </Box>
      <Box bg="pink" w="100px" h="100px" color="white">
        item3
      </Box>
    </Flex>
  );
}
