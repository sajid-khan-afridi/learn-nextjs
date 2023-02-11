import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function SomeText() {
  return (
    <Container maxW={"1440"} mt="20" px="100">
      <Box
        maxW={"1400"}
        borderRadius={"20"}
        bg="teal.100"
        py="50"
        px={{ sm: "50", md: "100", lg: "200" }}
      >
        <VStack>
          <Box borderLeft={"10px solid #a41e1e"}>
            <Heading pl={5}>The Program in a Nutshell</Heading>
          </Box>
          <Heading color={"teal.500"}>Earn While You Learn</Heading>
          <Text>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program’s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
}
{
  /* <Container maxW={"1440"} mt="20" px="100">
<Box maxW={"1400"} borderRadius={"20"} bg="teal.100" py="50" px="200">
  <VStack>
    <Box borderLeft={"10px solid #a41e1e"}>
      <Heading pl={5}>The Program in a Nutshell</Heading>
    </Box>
    <Heading color={"teal.500"}>Earn While You Learn</Heading>
    <Text>
      In this brand-new type of curriculum, students will learn how to
      make money and boost exports in the classroom and will begin doing
      so within six months of the program’s beginning. It resembles a
      cross between a corporate venture and an educational project.
    </Text>
  </VStack>
</Box>
</Container> */
}
