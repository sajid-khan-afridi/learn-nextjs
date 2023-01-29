"use client";
import { Box, HStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="green">
      <Box px="100px" pt="43" pb="43">
        <HStack spacing="40px">
          <Box as="button" textAlign="center" w="144px" h="27px" bg="purple">
            Panaverse DAO
          </Box>
          <Box as="button" textAlign="center" w="43px" h="19px" bg="purple">
            Home
          </Box>
          <Box as="button" textAlign="center" w="58px" h="19px" bg="purple">
            Course
          </Box>
          <Box as="button" textAlign="center" w="193px" h="46px" bg="purple">
            Enroll Today
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
