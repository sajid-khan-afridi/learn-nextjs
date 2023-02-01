"use client";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Page() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}
