import CheckIcon from "@/public/icons/icon";
import { Box, Button, Flex, Heading, HStack, Text,StackProps, Icon, Stack } from "@chakra-ui/react";

export const ListItem=(StackProps)=>{
  const {children,...rest}=StackProps;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px"/>
      <Text>{children}</Text>
    </HStack>
  )
}

export default function Pricing() {
  return (
    <Box maxW="994px" margin="auto" mt="-256px"  borderRadius="12px" overflow="hidden" boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' >
      <Flex>
        <Box  p="60px" textAlign="center" bg="#F0EAFB" h="250px">
          <Text mt="57px" fontWeight="800" fontSize="24px" color="#171923">
            Premium Pro
          </Text>
          <Heading
            as="h3"
            mt="16px"
            fontSize="60px"
            fontWeight="800"
            color="#171923"
          >
            $329
          </Heading>
          <Text color="#171923" mt="8px" fontSize="18px" fontWeight="500">
            billing just once
          </Text>
          <Button
            mt="24px"
            w="282px"
            h="50px"
            size="lg"
            borderRadius="8px"
            colorScheme="purple"
            //bg="purple"
          >
            Get Started
          </Button>
        </Box>
        <Box p="60px" fontSize="18px" bg="white">
          <Text textAlign="left">
          Access these features when you get this pricing package for your business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem >International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
