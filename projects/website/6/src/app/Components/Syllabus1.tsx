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
    { title: "Metaverse", body: "body1" },
    { title: "Blockchain", body: "body2" },
    { title: "Typescript", body: "body3" },
    { title: "Typescript", body: "body4" },
  ];
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
        {/* {["Metaverse", "Blockchain", "Typescript"].map((title) => ( */}
        {commonInAll.map((item) => (
          <Box
            key={item.title}
            boxShadow={"dark-lg"}
            height={{ base: "250px", md: "280px", lg: "250px" }}
            borderRadius={20}
            p="5"
          >
            <Box borderBottom={"5px solid #a41e1e"}>
              <Heading pl="5">{item.title}</Heading>
            </Box>
            <Text fontSize={{ base: "15", md: "15", lg: "15" }}>
              {item.body}
            </Text>
            <Box textAlign={"center"} pt="3">
              <Button colorScheme={"teal"}>Learn More →</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
