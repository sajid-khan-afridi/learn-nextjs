import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Cards() {
  const card = [
    {
      imgsrc:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      imgalt: "",
      heading: "1",
      text: "text",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      imgalt: "",
      heading: "1",
      text: "text",
    },
  ];
  return (
    <Box>
      <Flex justifyContent={"space-between"} mx="20px">
        {card.map((c) => {
          <Box>{c.heading}</Box>;
        })}
      </Flex>
    </Box>
  );
}
