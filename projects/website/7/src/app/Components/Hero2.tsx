import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import president from "../../../public/images/president.png"

export default function Hero2() {
  return (
    <Container maxW={1440} mx="auto" bg={"purple.300"}>
      <Flex 
      flexDir={{base:"column",md:"row", lg:"row"}}
      >
        
        <Box flexBasis={"30%"}>
          <Image src={president} alt="president of pakistan" height={"500"}/>
        </Box>
       

  
        <Box 
        
        flexBasis={"70%"} 
        // textAlign="center"
        // 
        // display="flex"
        // justifyContent="center"
        // alignItems={"center"}
        >
          <Heading pt={{base:"5",lg:"15%"}}>
            Program Of Studies 
            
            </Heading>
          <Text pt="10">
          This curriculum is intended for beginners who want
          to learn software development from the ground up. It is going to be a
          fifteen-month-long hybrid program that includes both onsite and online
          classes and is divided into five quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects.
          </Text>
          <Button colorScheme={"teal"} my="10">
            Apply
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
