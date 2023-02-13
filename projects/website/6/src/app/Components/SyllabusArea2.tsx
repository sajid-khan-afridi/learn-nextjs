import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Syllabus2 } from "./Syllabus2";

interface Course {
  title: string;
  body: string;
}
export default function SyllabusArea2() {
  const Web3courses: Course[] = [
    {
      title: "Quarter IV",
      body: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    },
    {
      title: "Quarter V",
      body: "MV-361: Developing Planet-Scale and Augmented Metaverse Experiences ",
    },
    // {
    //   title: "Quarter III",
    //   body: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    // },
  ];
  const AIcourses: Course[] = [
    {
      title: "Quarter IV",
      body: "AI-351: Developing Planet-Scale APIs and Python Programming",
    },
    {
      title: "Quarter V",
      body: "AI-361: Deep Learning and MLOps (Machine Learning Operations) ",
    },
  ];
  const CNCcourses: Course[] = [
    {
      title: "Quarter IV",
      body: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    },
    {
      title: "Quarter V",
      body: "CN-361: Developing Multi-Cloud APIs using CDK for Terraform ",
    },
  ];
  const IoTcourses: Course[] = [
    {
      title: "Quarter IV",
      body: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    },
    {
      title: "Quarter V",
      body: "AC-361: Embedded Programming using C and Rust ",
    },
  ];
  const GBiocourses: Course[] = [
    {
      title: "Quarter IV",
      body: "Bio-351: Python for Biologists",
    },
    {
      title: "Quarter V",
      body: "Bio-361: Bioinformatics with Python",
    },
  ];
  const NPAcourses: Course[] = [
    {
      title: "Quarter IV",
      body: "NPA-351: CCNA(Cisco Certified Network Ass.) 200-301 Certification",
    },
    {
      title: "Quarter V",
      body: "NPA-361: Network Programmability and Automation",
    },
  ];

  return (
    <Container maxW="1440" mt="5">
      {/* section1 */}

      <Box ml={{ base: "0", md: "0", lg: "30%" }} mt="10">
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>Specialized Tracks</Heading>
        </Box>
      </Box>
      <Box px={{ base: "0", md: "", lg: "40" }} pt="8">
        <Text>
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
      </Box>
      <Box ml={{ base: "0", md: "0", lg: "30%" }} mt="10">
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>Common in All</Heading>
        </Box>
      </Box>
      <Box px={{ base: "0", md: "", lg: "40" }} pt="8">
        <Text>
          Every participant of the program will start by completing the
          following three core courses:
        </Text>
      </Box>
      <Syllabus2 courses={Web3courses} />
      <Syllabus2 courses={AIcourses} />
      <Syllabus2 courses={CNCcourses} />
      <Syllabus2 courses={IoTcourses} />
      <Syllabus2 courses={GBiocourses} />
    </Container>
  );
}
