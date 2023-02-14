"use client";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import president from "../../../public/images/president.png";

export default function page() {
  return (
    <>
      <Container maxW="1440" mt="5">
        {/* section1 */}
        <Box>
          <Box color={"#a41e1e"} borderLeft={"10px solid #a41e1e"} mt="10">
            <Heading pl={5}>About</Heading>
          </Box>
        </Box>
        <Flex mt="20">
          <Box flexBasis={"50%"} order="1">
            <Image src={president} alt="president picture" />
          </Box>
          <Box flexBasis={"50%"} order="2">
            <Box borderLeft={"10px solid #a41e1e"} mt="10">
              <Heading pl={5}>About</Heading>
            </Box>
            <Box  pt="8">
              <Text>
                Dr. Arif Alvi Dr. Arif Alvi was sworn in as the 13th President
                of Islamic Republic of Pakistan on 9th September 2018. Dr. Arif
                Alvi was born in 1949 and completed his early education in
                Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’. President Dr. Arif Alvi has been a
                renowned professional and has held many important positions in
                the field of Dentistry. He remained Dean of Orthodontics,
                College of Physicians and Surgeons of Pakistan, President,
                Pakistan Dental Association (1997-2001), Pakistan Association of
                Orthodontists (2005), Asia Pacific Dental Federation (2006-07)
                and Councilor of the World Dental Federation (2007-2013).
                Through his sheer hard work in the World Dental Federation, he
                was able to get the declaration of 20th March as World Oral
                Health Day. He is also an author of a book, theses, and many
                articles.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
