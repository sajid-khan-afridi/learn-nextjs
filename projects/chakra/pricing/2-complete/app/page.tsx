"use client";
import Header from "@/components/Header";
import Prac from "@/components/Prac";
import Pricing from "@/components/Pricing";
import { Heading } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      {/* <Prac /> */}
    </ChakraProvider>
  );
}
