import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box bg="#6B46C1" color="white" textAlign="center">
      <Heading pt="90px">Simple pricing for your business</Heading>
      <Text pt="16px" pb="198px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
