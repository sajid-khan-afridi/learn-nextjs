import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg={"black"} color={"white"}>
      <VStack>
        <Heading
          fontWeight={"800"}
          bgGradient="linear-gradient(325deg, rgba(244,244,244,0) 0%, rgba(237,237,246,0) 0%, rgba(255,118,6,1) 29%, rgba(238,152,0,1) 84%, rgba(255,255,255,1) 100%)"
          bgClip="text"
          pt={"50"}
        >
          Presidential Initiative
        </Heading>
        <Text>for Artificial Intelligence & Computing (PIAIC)</Text>
        <HStack pt={"50"} pb="50">
          <Button
            variant="outline"
            color="white"
            borderColor={"orange.600"}
            _hover={{
              color: "orange",
              background: "transparent",
              borderColor: "white",
            }}
          >
            Apply Now
          </Button>
          <Button
            variant="outline"
            color="white"
            borderColor={"orange.600"}
            _hover={{
              color: "orange",
              background: "transparent",
              borderColor: "white",
            }}
          >
            Register Yourself
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
