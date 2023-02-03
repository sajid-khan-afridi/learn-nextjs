"use client";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Navbar from "@/components/Navbar";
import Prac2 from "@/components/Prac2";
import Prac3 from "@/components/Prac3";

import { ChakraProvider, Divider } from "@chakra-ui/react";

export default function Page() {
  return (
    <ChakraProvider>
      <Navbar />
      <Divider />

      <Header />
      <Divider />

      <Prac3 />
      <Divider />
      <Footer />

      {/* <Prac2 /> */}
    </ChakraProvider>
  );
}
