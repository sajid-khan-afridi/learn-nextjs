"use client";
import "./globals.css";

import ChakraWrapper from "../components/Chakra";
import Top from "@/components/top";
import TopMenu from "@/components/topMenu";
import { VStack } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ChakraWrapper>
          <VStack p={4}>
            <Top />
            <TopMenu />
            {children}
          </VStack>
        </ChakraWrapper>
      </body>
    </html>
  );
}
