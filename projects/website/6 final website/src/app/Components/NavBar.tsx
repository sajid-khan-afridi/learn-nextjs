"use client";
import {
  HamburgerIcon,
  // AddIcon,
  // EditIcon,
  // ExternalLinkIcon,
  // RepeatIcon,
} from "@chakra-ui/icons";

import {
  Box,
  Button,
  Container,
  Flex,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/panaverse-logo.png";

export default function NavBar() {
  return (
    <Box boxShadow={"lg"}>
      <Container
        // maxW={{ base: "560", md: "768", lg: "1440" }}
        maxW={1440}
        mx="auto"
      >
        <SimpleGrid templateColumns={"repeat(3,1fr)"}>
          <Box mt={["3", "0", "0"]}>
            <Link href={"/"}>
              <Image src={logo} alt="logo" height={"80"} width={"80"} />
            </Link>
          </Box>

          {/* Hide */}
          <Hide below="625px">
            <Flex
              // gap={10}
              placeItems="center"
              // fontSize={18}
              fontWeight="semibold"
              color="black"
              gap="8"
              // gap={{ base: "2", md: "4", lg: "8" }}
              // fontSize={{ base: "12", md: "15", lg: "18" }}
            >
              <Box
                _hover={{
                  background: "white",
                  color: "teal.500",
                  fontWeight: "bold",
                }}
              >
                <Link href={"/"}>Home</Link>
              </Box>
              <Box
                _hover={{
                  background: "white",
                  color: "teal.500",
                  fontWeight: "bold",
                }}
              >
                <Link href={"/syllabus"}>Syllabus</Link>
              </Box>
              <Box
                _hover={{
                  background: "white",
                  color: "teal.500",
                  fontWeight: "bold",
                }}
              >
                <Link href={"/explore"}>Explore</Link>
              </Box>
              <Box
                _hover={{
                  background: "white",
                  color: "teal.500",
                  fontWeight: "bold",
                }}
              >
                <Link href={"/about"}>About</Link>
              </Box>
              <Box
                _hover={{
                  background: "white",
                  color: "teal.500",
                  fontWeight: "bold",
                }}
              >
                <Link href={"/contact"}>Contact</Link>
              </Box>
            </Flex>
            <Box pt={1} float="right">
            {/* https://portal.piaic.org/ */}
            <Link href={"https://portal.piaic.org/"}>
              <Button float={"right"} colorScheme={"teal"}>
                Apply
              </Button>
            </Link>
            </Box>
          </Hide>

          {/* Show */}
          <Show below="625px">
            <Spacer />
            <Flex pl="60" pt="1">
              {/* <Show above="sm"> */}
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>
                    <Link href={"/"}>Home</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/syllabus"}>Syllabus</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/explore"}>Explore</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/about"}>About</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/contact"}>Contact</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Show>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
