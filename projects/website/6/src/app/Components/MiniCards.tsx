import { Box, Container, SimpleGrid, Image } from "@chakra-ui/react";

import zia from "../../../public/images/zia.jpg";

export default function MiniCards() {
  return (
    <Container
      maxW={1440}
      // mx="auto"
      p={50}
      mt={70}
      bg="teal.800"
      color="gray.200"
    >
      <SimpleGrid
        // spacingX={10}
        spacing="20"
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        py="50"
        //
        minChildWidth="400"
      >
        {/* section 1 */}
        <Box>
          <Image
            borderRadius="full"
            boxSize="150px"
            alt="Sir Zia Khan"
            src="./images/zia.jpg"
          />
        </Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </SimpleGrid>
    </Container>
  );
}
