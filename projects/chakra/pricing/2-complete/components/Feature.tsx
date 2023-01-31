import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Icon1, Icon2, Icon3 } from "./icons/iconp";

export default function Feature() {
  return (
    <Box maxW="700px" m="auto" mt="56px">
      <Flex>
        <HStack mr="35px">
          <Icon as={Icon1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mr="35px">
          <Icon as={Icon2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack>
          <Icon as={Icon3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
