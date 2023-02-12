import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

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
        //
        minChildWidth="255px"
        spacing="40px"
        // column={"3"}
        // spacingX="40px"
        // spacingY="20px"
        // templateRows={"auto"}
        gridTemplateRows={"min-content"}
      >
        {/* {["Metaverse", "Blockchain", "Typescript"].map((title) => ( */}
        {commonInAll.map((item) => (
          <Box
            key={item.title}
            boxShadow={"dark-lg"}
            // height={{ base: "250px", md: "280px", lg: "250px" }}
            borderRadius={20}
            p="5"
            // overflow={"hidden"}
            // overflowWrap="break-word"
            // wordBreak={"break-all"}
            // gridTemplateRows={"min-content"}
            // minHeight={"auto"}
          >
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
