import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Syllabus1 from "./Syllabus1";

export default function SyllabusArea1() {
  return (
    <Container maxW="1440" mt="5">
      {/* section1 */}
      <Box>
        <Box color={"#a41e1e"} borderLeft={"10px solid #a41e1e"} mt="10">
          <Heading pl={5}>Syllabus</Heading>
        </Box>
      </Box>
      <Box ml={{ base: "0", md: "0", lg: "30%" }} mt="10">
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>Course Syllabus</Heading>
        </Box>
      </Box>
      <Box px={{base:"0",md:"",lg:"40"}} pt="8">

        <Text>
          The first three quarters are shared by all specialties and are
          dedicated to studying Object-Oriented Programming and cutting-edge
          Full-Stack Web 2.0 development. It is going to be a fifteen-month-long
          hybrid program that includes both onsite and online classes and is
          divided into five quarters of 13 weeks each
        </Text>
      </Box>
      <Syllabus1 />
    </Container>
  );
}
