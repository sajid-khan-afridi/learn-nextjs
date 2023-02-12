import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function Syllabus1() {
  const commonInAll = [
    {
      title: "Quarter I",
      body: "CS-101: Object-Oriented Programming using TypeScript and Typescript for React",
    },
    {
      title: "Quarter II",
      body: "W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terrafor",
    },
    {
      title: "Quarter III",
      body: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    },
  ];
  return (
    <Container maxW={1100} my="10">
      <SimpleGrid
        minChildWidth="255px"
        spacing="40px"
        style={{ gridTemplateRows: "auto", gridAutoRows: "auto" }}
      >
        {commonInAll.map((item) => (
          <Box key={item.title} boxShadow={"dark-lg"} borderRadius={20} p="5">
            <Box borderBottom={"5px solid #a41e1e"}>
              <Heading pl="5">{item.title}</Heading>
            </Box>
            <Text pt="5" fontSize={{ base: "15", md: "15", lg: "15" }}>
              {item.body}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
