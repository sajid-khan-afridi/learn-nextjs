import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

interface Course {
  title: string;
  body: string;
}

interface Syllabus2Props {
  courses: Course[];
}
export const Syllabus2: React.FC<Syllabus2Props> = (props) => {
  const { courses } = props;
  return (
    <Container maxW={700} my="10">
      <SimpleGrid
        minChildWidth="255px"
        spacing="40px"
        style={{ gridTemplateRows: "auto", gridAutoRows: "auto" }}
      >
        {courses.map((item) => (
          <Box key={item.title} boxShadow={"dark-lg"} borderRadius={20} p="5">
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
};
