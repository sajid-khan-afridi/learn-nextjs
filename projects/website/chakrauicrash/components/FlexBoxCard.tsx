import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

export default function FlexBoxCard() {
  return (
    <Stack
      direction={"row"}
      //   alignContent="center"
      alignItems={"center"}
      justifyContent={"center"}
      h={300}
      border="1px solid red"
      flexWrap={"wrap"}
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
        <Card2 />
        Box1 text aligning{" "}
      </Box>
      <Box w={250} h={250} bg={"red"} color="white">
        Box2 grow and shrink{" "}
      </Box>
      <Box w={250} h={250} bg={"green"} color="white">
        Box3 order{" "}
      </Box>
      <Box w={250} h={250} bg={"pink"} color="white">
        Box4 order{" "}
      </Box>
    </Stack>
  );
}
