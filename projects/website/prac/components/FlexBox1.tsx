"use client";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";

export default function FlexBox1() {
  return (
    // <Stack direction={"row"} alignContent="center" justifyContent={"center"}>
    <Stack
      direction={"row"}
      // alignContent="center"
      alignItems={"center"}
      justifyContent={"center"}
      h={300}
      border="1px solid red"
      flexWrap={"wrap"}
    >
      <Box w={250} h={250} bg={"blue"}>
        Box1{" "}
      </Box>
      <Box w={250} h={250} bg={"red"}>
        Box2{" "}
      </Box>
      <Box w={250} h={250} bg={"green"}>
        Box3{" "}
      </Box>
      <Box w={250} h={250} bg={"pink"}>
        Box4{" "}
      </Box>
    </Stack>
  );
}
