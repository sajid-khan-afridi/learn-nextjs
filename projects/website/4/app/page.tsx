"use client";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Page() {
  return (
    <Stack
      direction={["column", "column", "row"]}
      m="100"
      align={"center"}
      spacing={["0.5", "0.5", "20"]}
    >
      <Box maxW={["150", "300", "300"]}>
        <Image
          src="/images/president.png"
          alt="President of Pakistan"
          width="500"
          height="500"
        />
      </Box>
      <Box maxW={[""]}>
        <Heading
          fontSize={["4xl", "4xl", "6xl"]}
          fontWeight={["bold", "bold", "extrabold"]}
        >
          Presidential Initiative
        </Heading>
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
      </Box>
    </Stack>
  );
}
