import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import MiniCards from "./MiniCards";

export default function MiniCardArea() {
  return (
    <Container maxW={1440} mt="100">
      <Box ml={{ base: "0", md: "0", lg: "30%" }}>
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>Our Instructors</Heading>
        </Box>
      </Box>
      <MiniCards />
    </Container>
  );
}
