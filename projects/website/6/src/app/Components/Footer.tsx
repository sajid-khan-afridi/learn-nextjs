import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/images/panaverse-logo.png";

export default function Footer() {
  return (
    <Container maxW={1440} mx="auto" mt={70} bg="teal.800" color="gray.200">
      <SimpleGrid templateColumns={"repeat(4,1fr)"} py="50">
        <Box>

        <Box borderLeft="5px solid #a41e1e">
          <Heading pl={5}>About us</Heading>
        </Box>

        <Box pt={8}>
          <Image src={logo} height={"150"} width={"150"} alt="logo pic" />
        </Box>


          <Box pt={8}>
          <Text>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </Text>
          </Box>
          
        </Box>

        <Box></Box>
        <Box>3</Box>
        <Box>4</Box>
      </SimpleGrid>
    </Container>
  );
}
