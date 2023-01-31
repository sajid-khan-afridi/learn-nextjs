"use client";
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Icon1, Icon2, Icon3 } from "./icons/iconp";

export default function Feature() {
  return (
    // responsiveness size base(mobile) md lg (sm,xsm,xl,xxl)
    <Box maxW="700px" m="auto" mt="56px">
      <Flex flexDirection={{ base: "column", md: "row", lg: "row" }} pl="20px">
        <HStack mr="35px">
          <Icon as={Icon1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mr="35px" pt={{ base: "20px", md: "0px", lg: "0px" }}>
          <Icon as={Icon2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack pt={{ base: "20px", md: "0px", lg: "0px" }}>
          <Icon as={Icon3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
