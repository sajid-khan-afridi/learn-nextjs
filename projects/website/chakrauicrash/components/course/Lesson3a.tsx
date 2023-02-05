import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Lesson3a() {
  return (
    <>
      <Heading as="h1" textAlign={"center"}>
        Lesson 3a Flex
      </Heading>
      <Flex justify={"space-between"} bg="gray:100" wrap="wrap" gap={"5"}>
        <Box bg={"blue"} h="150px" w="150px">
          box1
        </Box>
        <Box bg={"green"} h="150px" w="150px" flexGrow={1}>
          box2 flexgrow=1
        </Box>
        <Box bg={"red"} h="150px" w="150px" flexGrow={2}>
          box3 flexgrow=2
        </Box>
        <Box bg={"pink"} h="150px" w="150px">
          box4
        </Box>
      </Flex>
    </>
  );
}
