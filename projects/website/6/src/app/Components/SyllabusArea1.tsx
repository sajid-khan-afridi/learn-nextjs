import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Syllabus2 from "./Syllabus2";

export default function SyllabusArea1() {
  return (
    <Container maxW="1440" mt="5">
      <Box ml={{ base: "0", md: "0", lg: "30%" }}>
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>Syllabus</Heading>
        </Box>
      </Box>
      <Syllabus2 />
    </Container>
  );
}
