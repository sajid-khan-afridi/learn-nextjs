"use client";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";

export default function FlexBox2() {
  return (
    // <Stack direction={"row"} alignContent="center" justifyContent={"center"}>
    <Stack
      direction={"row"}
      //   alignContent="center"
      alignItems={"center"}
      justifyContent={"center"}
      h={300}
      border="1px solid red"
      //   flexWrap={"wrap"}
    >
      <Box
        w={250}
        h={250}
        bg={"blue"}
        textAlign="center"
        // justifyContent={"center"}
        // justifyItems={"center"}
        // verticalAlign={"center"}

        color="white"
      >
        Box1 text aligning{" "}
      </Box>
      <Box w={250} h={250} bg={"red"} color="white" flexGrow="3" flexShrink={2}>
        Box2 grow and shrink{" "}
      </Box>
      <Box w={250} h={250} bg={"green"} order={3} color="white">
        Box3 order{" "}
      </Box>
      <Box w={250} h={250} bg={"pink"} order={2} color="white">
        Box4 order{" "}
      </Box>
    </Stack>
  );
}
