"use client";
import Feature from "@/components/Feature";
import Header from "@/components/Header";
import Prac from "@/components/Prac";
import Prac2 from "@/components/Prac2";
import Pricing from "@/components/Pricing";
import { Heading } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      {/* <Prac /> */}
      {/* <Prac2 /> */}
      <Feature />
    </ChakraProvider>
  );
}
