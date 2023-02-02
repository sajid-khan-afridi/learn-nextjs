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
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Prac2() {
  return (
    // flex practice
    <>
      {/* box without flex */}
      <Box>
        <Box p="20px" color="white" bg="blue">
          Box 1
        </Box>
        <Box p="20px" color="white" bg="red">
          Box 2
        </Box>
        <Box p="20px" color="white" bg="green">
          Box 3
        </Box>
      </Box>
      {/* box with flex */}
      {/* flexDirection=colunm is used for responsiveness */}
      {/* justifyContent=space-between space-around end start center(in row wise) */}
      {/* alignItem=end center(vertically center the content)  */}
      {/* textAlign=center(box center the content) */}
      <Box>
        <Flex>
          <Box p="20px" color="white" bg="blue">
            Box 1
          </Box>
          <Box p="20px" color="white" bg="red">
            Box 2
          </Box>
          <Box p="20px" color="white" bg="green">
            Box 3
          </Box>
        </Flex>
      </Box>
      <Divider />
      {/* box with flex */}
      {/* flexDirection=colunm is used for responsiveness */}
      {/* justifyContent=space-between space-around end start center(in row wise) */}
      {/* alignItem=end center(vertically center the content)  */}
      {/* textAlign=center(box center the content) */}
    </>
  );
}
