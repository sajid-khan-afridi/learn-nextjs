"use client";
import Cards from "@/components/Cards";
import Header from "@/components/Header";

import Navbar from "@/components/Navbar";
import Prac2 from "@/components/Prac2";
import Prac4 from "@/components/Prac4";
import { ChakraProvider, Divider } from "@chakra-ui/react";

export default function Page() {
  return (
    <ChakraProvider>
      <Navbar />
      <Divider />

      <Header />
      <Divider />

      {/* <Cards /> */}
      <Prac4 />
    </ChakraProvider>
  );
}
