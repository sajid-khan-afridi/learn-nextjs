"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      as="section"
      bg="#6B46C1"
      color="#F7FAFC"
      pt="90px"
      pb="198px"
      px="32px"
    >
      <Heading textAlign="center" fontWeight="800" fontSize="48px">
        Simple pricing for your business
      </Heading>
      <Text textAlign="center" fontWeight="500" fontSize="24px" pt="16px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
