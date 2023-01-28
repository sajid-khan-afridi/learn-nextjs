"use client";
import {
  HStack,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function TopMenu() {
  return (
    <HStack alignSelf="flex-start" pl={100} pt={50}>
      <Menu>
        <Link href="/">
          <MenuButton as={Button} colorScheme="pink">
            Home
          </MenuButton>
        </Link>
        <Link href="/posts">
          <MenuButton as={Button} colorScheme="pink">
            Posts
          </MenuButton>
        </Link>
        <MenuButton as={Button} colorScheme="pink">
          Profile
        </MenuButton>
      </Menu>
    </HStack>
  );
}
