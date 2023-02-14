import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface StateElements {
  Title: string;
  Body: string;
}

const commonInAll = [
  { title: "Metaverse", body: "body1" },
  { title: "Blockchain", body: "body2" },
  { title: "Typescript", body: "body3" },
  { title: "Typescript", body: "body4" },
];

export default function Syllabusprac() {
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
        {commonInAll.map((item) => {
          <CardsToDisplay Title={item.title} Body={item.title} />;
        })}
        {/* {["Metaverse", "Blockchain", "Typescript"].map((title) => ( */}
        {/* {commonInAll.map((item) => ( */}

        {/* ))} */}
      </SimpleGrid>
    </Container>
  );
}

function CardsToDisplay(props: StateElements) {
  const { title, body } = props;
  return (
    <Box
      key={title}
      boxShadow={"dark-lg"}
      height={{ base: "250px", md: "280px", lg: "250px" }}
      borderRadius={20}
      p="5"
    >
      <Box borderBottom={"5px solid #a41e1e"}>
        <Heading pl="5">{title}</Heading>
      </Box>
      <Text fontSize={{ base: "15", md: "15", lg: "15" }}>{body}</Text>
      <Box textAlign={"center"} pt="3">
        <Button colorScheme={"teal"}>Learn More →</Button>
      </Box>
    </Box>
  );
}
