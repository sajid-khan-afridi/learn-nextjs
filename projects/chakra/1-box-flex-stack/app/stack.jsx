"use client";
import { Stack, Box, VStack, HStack } from "@chakra-ui/react";

export default function StackBox() {
  return (
    <HStack spacing="24px">
      <Box bg="blue" w="100px" h="100px" color="white">
        item1
      </Box>
      <Box bg="green" w="100px" h="20px" color="white">
        item2
      </Box>
      <Box bg="pink" w="100px" h="100px" color="white"></Box>
    </HStack>
  );
}
