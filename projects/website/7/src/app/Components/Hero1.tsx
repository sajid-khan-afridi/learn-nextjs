import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import pic from "../../../public/images/president.png";

export default function Hero1() {
  return (
    <Container maxW="1440">
      <Box mt={10}>
        <Stack
          // a
          align={"center"}
          // spacing={"50"}
          direction={{ base: "column", md: "column", lg: "row" }}
        >
          <Box maxW={"300"}>
            <Image
              src={pic}
              height={"500"}
              width={"500"}
              alt="president image"
            />
          </Box>
          <Box
            px={{ base: "0", md: "10", lg: "20" }}
            maxW="900"
            // mx={"auto"}

            //
          >
            <Box borderLeft={"10px solid #a41e1e"}>
              <Heading pl="5">Program Of Studies</Heading>
            </Box>

            <Text py={"10"}>
              This curriculum is intended for beginners who want to learn
              software development from the ground up. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each.
              The emphasis will be on hands-on learning by educating students to
              produce projects.
            </Text>

            <Button colorScheme={"teal"}>Read More</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
