import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Syllabus2 } from "./Syllabus2";

interface Course {
  title: string;
  body: string;
}
// interface ElementStructure {
//   Courses: Course[];
//   Heading: string;
//   Body: string;
// }

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
  //   Courses:Course[];
  //   Heading:string;
  //   Body:string;
  const element = [
    {
      mycourse: Web3courses ,
      Heading: "1- Web 3.0 (Blockchain) and Metaverse Specialization",
      Body: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    },
    {
      mycourse: AIcourses ,
      Heading: "2- Artificial Intelligence (AI) and Deep Learning Specialization",
      Body: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    },
    {
      mycourse: CNCcourses ,
      Heading: "3- Cloud-Native Computing Specialization",
      Body: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    },
    {
      mycourse: IoTcourses,
      Heading: "4- Ambient Computing and IoT Specialization",
      Body: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.",
    },
    {
      mycourse: GBiocourses,
      Heading: "5- Genomics and Bioinformatics Specialization",
      Body: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications",
    },
    {
      mycourse: NPAcourses,
      Heading: "6- Network Programmability and Automation Specialization",
      Body: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    },

  ];

  return (
    <Container maxW="1440" mt="5">
      {/* section1 */}

      <Box ml={{ base: "0", md: "0", lg: "30%" }} mt="40">
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
      

      {/* dynamic contents*/}
      {element.map((item)=>(
        <>
        <Box ml={{ base: "0", md: "0", lg: "10%" }} mt="20">
        <Box borderLeft={"10px solid #a41e1e"}>
          <Heading pl={5}>{item.Heading}</Heading>
        </Box>
      </Box>
      <Box px={{ base: "0", md: "", lg: "40" }} pt="8">
        <Text>
         {item.Body}
        </Text>
      </Box>
      <Syllabus2 courses={item.mycourse} />
        </>

      ))}
      
      {/* <Syllabus2 courses={Web3courses} />
      <Syllabus2 courses={AIcourses} />
      <Syllabus2 courses={CNCcourses} />
      <Syllabus2 courses={IoTcourses} />
      <Syllabus2 courses={GBiocourses} /> */}
    </Container>
  );
}