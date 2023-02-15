"use client";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import president from "../../../public/images/president.png";
import panaverse from "../../../public/images/panaverse-logo.png"
import zia from "../../../public/images/zia.jpg"


export default function page() {
  const arr=[
    {
      image:president,
      heading:"Dr. Arif Alvi",
      text:`
      
      Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
    
    
     Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
      
      
      President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.`,
      order:1
    },
    {
      image:panaverse,
      heading:"Panaverse DAO",
      text:`Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet


      President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.`,
      order:2
    },
    {
      image:zia,
      heading:"Zia Khan",
      text:`CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.


      Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.`,
      order:1
    },
  
  ]
  return (
    <>
      <Container maxW="1440" mt="5">
        {/* section1 */}
        <Box>
          <Box color={"#a41e1e"} borderLeft={"10px solid #a41e1e"} mt="10">
            <Heading pl={5}>About</Heading>
          </Box>
        </Box>
        {arr.map((item)=>(

          <Flex mt="20">
          <Box flexBasis={"50%"} order={item.order}>
            <Image src={item.image} alt="president picture" />
          </Box>
          <Box flexBasis={"50%"} order="1">
            <Box borderLeft={"10px solid #a41e1e"} mt="10">
              <Heading pl={5}>{item.heading}</Heading>
            </Box>
            <Box  pt="8">
              <Text>
                {item.text}
              </Text>
            </Box>
          </Box>
        </Flex>
          ))}
      </Container>
    </>
  );
}
