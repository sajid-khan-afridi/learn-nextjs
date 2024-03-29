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
        {/* section 1 */}
        <Box
          as="section"
          boxShadow={"dark-lg"}
          //   border="0.25px solid #a41e1e"
          height={{base:"250px",md:"280px",lg:"250px"}}
          borderRadius={20}
          p="5"
        >
          <Box borderBottom={"5px solid #a41e1e"}>
            <Heading pl="5">Metaverse</Heading>
          </Box>
          <Text fontSize={{ base: "15", md: "15", lg: "15" }}>
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders and service providers.
            Panaverse DAO is struggling to produce professionals.
          </Text>
          <Box textAlign={"center"} pt="3">
            <Button colorScheme={"teal"}>Learn More →</Button>
          </Box>
        </Box>

        {/* section 2 */}
        <Box
          boxShadow={"dark-lg"}
          //   border="0.25px solid #a41e1e"
          height={{base:"250px",md:"280px",lg:"250px"}}
          borderRadius={20}
          p="5"
        >
          <Box borderBottom={"5px solid #a41e1e"}>
            <Heading pl="5">Blockchain</Heading>
          </Box>
          <Text fontSize={{ base: "15", md: "15", lg: "15" }}>
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders and service providers.
            Panaverse DAO is struggling to produce professionals.
          </Text>
          <Box textAlign={"center"} pt="3">
            <Button colorScheme={"teal"}>Learn More →</Button>
          </Box>
        </Box>
        {/* section 3 */}
        <Box
          boxShadow={"dark-lg"}
          //   border="0.25px solid #a41e1e"
          height={{base:"250px",md:"280px",lg:"250px"}}
          borderRadius={20}
          p="5"
        >
          <Box borderBottom={"5px solid #a41e1e"}>
            <Heading pl="5">Typescript</Heading>
          </Box>
          <Text fontSize={{ base: "15", md: "15", lg: "15" }}>
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders and service providers.
            Panaverse DAO is struggling to produce professionals.
          </Text>
          <Box textAlign={"center"} pt="3">
            <Button colorScheme={"teal"}>Learn More →</Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
