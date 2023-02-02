"use client";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" bg="black" color="white">
      <HStack>
        <NextLink href="#" passHref>
          <Link fontWeight={"500"} _hover={{ color: "orange" }}>
            Docs
          </Link>
        </NextLink>
        <NextLink href="#" passHref>
          <Link fontWeight={"500"} _hover={{ color: "orange" }}>
            link2
          </Link>
        </NextLink>
        <NextLink href="#" passHref>
          <Link fontWeight={"500"} _hover={{ color: "orange" }}>
            link3
          </Link>
        </NextLink>
      </HStack>
    </Box>
  );
}
