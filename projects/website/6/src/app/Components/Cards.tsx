import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Cards() {
  return (
    <Container maxW={1100}>
      <SimpleGrid
        //
        minChildWidth="255px"
        spacing="40px"
        // column={"3"}
        // spacingX="40px"
        // spacingY="20px"
      >
        <Box
          as="section"
          boxShadow={"dark-lg"}
          //   border="0.25px solid #a41e1e"
          height="250px"
          borderRadius={20}
          p="5"
        >
          <Box borderBottom={"5px solid #a41e1e"}>
            <Heading pl="5">Metaverse</Heading>
          </Box>
          <Text>
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders and service providers.
            Panaverse DAO is struggling to produce professionals.
          </Text>
          <Box textAlign={"center"} pt="3">
            <Button colorScheme={"teal"}>Learn More →</Button>
          </Box>
        </Box>
        <Box
          boxShadow={"dark-lg"}
          //   border="0.25px solid #a41e1e"
          height="250px"
          borderRadius={20}
        ></Box>
        <Box
          boxShadow={"dark-lg"}
          //   border="0.25px solid #a41e1e"
          height="250px"
          borderRadius={20}
        ></Box>
      </SimpleGrid>
    </Container>
  );
}
