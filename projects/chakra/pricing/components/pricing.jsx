import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Pricing() {
  return (
    <Box>
      <Flex>
        <Box p="60px" textAlign="center" bg="#F0EAFB">
          <Text mt="57px" fontWeight="800" fontSize="24px" color="#171923">
            Premium Pro
          </Text>
          <Heading
            as="h3"
            mt="16px"
            fontSize="60px"
            fontWeight="800"
            color="#171923"
          >
            $329
          </Heading>
          <Text color="#171923" mt="8px" fontSize="18px" fontWeight="500">
            billing just once
          </Text>
          <Button
            mt="24px"
            w="282px"
            h="50px"
            size="lg"
            borderRadius="8px"
            colorScheme="purple"
            //bg="purple"
          >
            Get Started
          </Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
