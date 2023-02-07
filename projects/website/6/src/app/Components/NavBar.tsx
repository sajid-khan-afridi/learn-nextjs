"use client";
import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/panaverse-logo.png";

export default function NavBar() {
  return (
    <Container maxW={"1440"} mx="auto">
      <SimpleGrid templateColumns={"repeat(3,1fr)"}>
        <Box>
          <Image src={logo} alt="logo" height={"80"} width={"80"} />
        </Box>
        <Flex gap={"8"}>
          <Link href={"/"}>Home</Link>
          <Link href={"/syllabus"}>Syllabus</Link>
          <Link href={"/explore"}>Explore</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </Flex>
        <Box>
          <Button float={"right"} colorScheme={"teal"}>
            Apply
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
