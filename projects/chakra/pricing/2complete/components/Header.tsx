"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box w="1440" h="397" color="#6B46C1">
      <Heading
        textAlign="center"
        fontWeight="800"
        fontSize="48px"
        color="#F7FAFC"
      >
        Simple pricing for your business
      </Heading>
      <Text textAlign="center" fontWeight="500" fontSize="24px" color="#F7FAFC">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
