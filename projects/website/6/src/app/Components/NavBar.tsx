"use client";
import {
  HamburgerIcon,
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
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
          <Box>
            <Image src={logo} alt="logo" height={"80"} width={"80"} />
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
              <Link href={"/"}>Home</Link>
              <Link href={"/syllabus"}>Syllabus</Link>
              <Link href={"/explore"}>Explore</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </Flex>
            <Box pt={1} float="right">
              <Button float={"right"} colorScheme={"teal"}>
                Apply
              </Button>
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
                  <MenuItem icon={<AddIcon />} command="⌘T">
                    New Tab
                  </MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                    New Window
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                    Open Closed Tab
                  </MenuItem>
                  <MenuItem icon={<EditIcon />} command="⌘O">
                    Open File...
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
