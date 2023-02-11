import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import MiniCards from "./MiniCards";

export default function MiniCardArea() {
  return (
    <Container maxW={1440} mt="100">
      <VStack>
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>Our Instructors</Heading>
        </Box>
        <MiniCards />
      </VStack>
    </Container>
  );
}
