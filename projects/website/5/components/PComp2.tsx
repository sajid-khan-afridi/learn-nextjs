import { Box, Heading, Stack } from "@chakra-ui/react";

export default function PComp2() {
  return (
    <Box>
      <Box maxW={"1440px"} mx="auto">
        <Box textAlign="center" letterSpacing="5px">
          <Heading>Courses</Heading>
          <Stack
            justify={"center"}
            align="center"
            direction={["column", "column", "row"]}
            wrap="wrap"
          >
            <Box
              bg="gray.400"
              h={"300px"}
              w={"300px"}
              boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            >
              1
            </Box>
            <Box bg="gray.400" h={"300px"} w={"300px"}>
              2
            </Box>
            <Box bg="gray.400" h={"300px"} w={"300px"}>
              3
            </Box>
            <Box bg="gray.400" h={"300px"} w={"300px"}>
              4
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
