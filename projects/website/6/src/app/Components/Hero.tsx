import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import pic from "../../../public/images/president.png";

export default function Hero() {
  return (
    <Container maxW="1440">
      <Flex>
        <Box>
          <Image src={pic} height={"500"} width={"500"} alt="president image" />
        </Box>
        <Box></Box>
      </Flex>
    </Container>
  );
}
