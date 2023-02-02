"use client";
import { Box, Flex, HStack, Link, Button, Icon } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Box bg="black" color="white" py={"4"} px={"6"}>
      <Box maxW={{ base: "576px", md: "1728" }} mx="auto">
        <Flex justifyContent={"space-between"} flex="1">
          <HStack spacing={"10"} py="2">
            <Link fontWeight={"500"} _hover={{ color: "orange" }}>
              Docs
            </Link>

            <Link fontWeight={"500"} _hover={{ color: "orange" }}>
              Link2
            </Link>
            <Link fontWeight={"500"} _hover={{ color: "orange" }}>
              Link3
            </Link>
          </HStack>
          <HStack>
            <Link fontWeight={"500"} _hover={{ color: "orange" }}>
              login
            </Link>
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
              Button
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
