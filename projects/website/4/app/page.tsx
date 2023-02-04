"use client";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();
  return (
    <Box bg="gray.100" py={100}>
      <Stack
        direction={["column", "column", "row"]}
        mx="100"
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
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </Text>
          {/* <button
          className={styles.button1}
          type="button"
          onClick={() => router.push("/name/address")}
        >
          {" "}
          Get Address
        </button> */}
          <br />
          <br />
          <Button
            fontSize="sm"
            fontWeight={600}
            onClick={() => router.push("https://www.piaic.org")}
            // href="https://www.piaic.org"
            colorScheme={"Red.400"}
            variant="solid"
          >
            Apply
          </Button>
          <Button variant="solid" colorScheme="orange">
            Apply now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
