import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function GridPrac() {
  return (
    // // 1st Grid
    // <SimpleGrid
    //   //   columns={3}
    //   spacing={10}
    //   templateColumns={{
    //     base: "repeat(1,1fr)",
    //     md: "repeat(2,1fr)",
    //     lg: "repeat(3,1fr)",
    //   }}
    //   //   templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
    // >
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    // </SimpleGrid>

    // 2nd Grid
    // <SimpleGrid minChildWidth="120px" spacing="40px">
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    //   <Box bg="tomato" height="80px"></Box>
    // </SimpleGrid>

    // 3rd Grid
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
}
