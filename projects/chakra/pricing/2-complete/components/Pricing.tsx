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
import Iconp from "./icons/iconp";

export default function Pricing() {
  return (
    <Box>
      <Flex>
        {/* left box */}
        <Box bg={"#BAC8DC"}>
          <Text fontSize={"24px"} fontWeight={"800"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"} fontWeight="800">
            $329
          </Heading>
          <Text>billed just once</Text>
          <Button bg={"#805AD5"} color="white">
            Get Started
          </Button>
        </Box>
        {/* right box */}
        <Box>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack>
            <Icon as={Iconp} h="22" w="22" />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack>
            <Icon as={Iconp} h="22" w="22" />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack>
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
  );
}
