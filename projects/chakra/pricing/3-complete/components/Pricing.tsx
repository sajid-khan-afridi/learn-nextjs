"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Iconp } from "./icons/iconp";

export default function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW={"994px"}
        m="auto"
        mt={"-130px"}
        bg="white"
        borderRadius={"12px"}
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        {/* // responsiveness size base(mobile) md lg (sm,xsm,xl,xxl) */}

        <Flex flexDirection={{ base: "column", md: "row", lg: "row" }}>
          {/* left box */}
          <Box bg={"#BAC8DC"} p="57px" textAlign={"center"}>
            <Text fontSize={"24px"} fontWeight={"800"} pb={"16px"}>
              Premium PRO
            </Text>
            <Heading fontSize={"60px"} fontWeight="800" pb="8px">
              $329
            </Heading>
            <Text pb={"24px"}>billed just once</Text>
            <Button bg={"#805AD5"} color="white" w="280px">
              Get Started
            </Button>
          </Box>
          {/* right box */}
          <Box p={"48px 48px 0 48px"}>
            <Text pb="24px">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack pb={"16px"}>
              <Icon as={Iconp} h="22" w="22" />
              <Text>International calling and messaging API</Text>
            </HStack>
            <HStack pb={"16px"}>
              <Icon as={Iconp} h="22" w="22" />
              <Text>Additional phone numbers</Text>
            </HStack>
            <HStack pb={"16px"}>
              <Icon as={Iconp} h="22" w="22" />
              <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack>
              <Icon as={Iconp} h="22" w="22" />
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
