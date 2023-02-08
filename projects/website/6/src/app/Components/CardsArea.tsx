import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Cards from "./Cards";

export default function CardsArea() {
  return (
    <Box mt={"10"}>
      <Box
        //   textAlign={"center"}
        maxW="500"
        mx="auto"
        pb={"10"}
      >
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading>Our Top Courses</Heading>
        </Box>
      </Box>
      <Cards />
    </Box>
  );
}
