import { Box, Flex, HStack, Link, Spacer } from "@chakra-ui/react";

export default function Navbar() {
  return (
    // <Flex as="nav" p="10" alignItems={"center"} gap="2">
    <Flex as="nav" p="10" alignItems={"center"} border="1px solid red">
      <Box>Logo</Box>
      <Spacer />

      <HStack spacing={"40px"}>
        <Link fontWeight="500" _hover={{ color: "green.500" }}>
          How It Works
        </Link>
        fontWeight="500"
        <Link fontWeight="500" _hover={{ color: "green.500" }}>
          Apply
        </Link>
        fontWeight="500"
        <Link fontWeight="500" _hover={{ color: "green.500" }}>
          Available Programs
        </Link>
        fontWeight="500"
        <Link fontWeight="500" _hover={{ color: "green.500" }}>
          WIT
        </Link>
      </HStack>
    </Flex>
  );
}
