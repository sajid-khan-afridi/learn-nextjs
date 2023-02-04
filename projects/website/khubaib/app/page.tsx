"use client";
import Image from "next/image";
import { Stack, Box, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
      m="100"
      direction={["column", "column", "row"]}
      align="center"
      spacing={["0.5", "0.5", "20"]}
    >
      <Box maxW={["150", "150", "300"]}>
        <Image
          src="/images/president.webp"
          width={500}
          height={500}
          alt="Presedent of Pakistan Pic"
        />
      </Box>
      <Box>
        <Text
          fontSize={["4xl", "4xl", "6xl"]}
          fontWeight={["bold", "bold", "extrabold"]}
        >
          Presidential Initiative
        </Text>
        <Text fontSize={["2xl", "2xl", "3xl"]}>
          for Artificial Intelligence & Computing (PIAIC)
        </Text>
        <Text>
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
          We want Pakistan to become a global hub for AI, data science, cloud
          native computing, edge computing, blockchain, augmented reality, and
          internet of things.
        </Text>
        <br />
        <br />
        <Button
        as={"a"}
        fontSize="sm"
        fontWeight={600}
href="https://www.piaic.org"

        >Apply</Button>
        
      </Box>
    </Stack>
  );
}
