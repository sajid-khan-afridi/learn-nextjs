"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";


export default function Page() {
  return (
    <ChakraProvider>
      <Button>hi</Button>
    </ChakraProvider>
  )
}
