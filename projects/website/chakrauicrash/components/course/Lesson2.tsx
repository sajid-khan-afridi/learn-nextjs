import { Box, Container, Text } from "@chakra-ui/react";

export default function Lesson2() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    textAlign: "center",
    ":hover": {
      color: "black",
      bg: "blue.300",
    },
    filter: "blur(2px)",
  };
  return (
    <Container as="section" maxW={"4xl"}>
      <Text>Lesson2</Text>
      <Box sx={boxStyles}>hello ninjas</Box>
    </Container>
  );
}
