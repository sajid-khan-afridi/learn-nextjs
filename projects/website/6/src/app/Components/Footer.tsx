import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/panaverse-logo.png";

export default function Footer() {
  return (
    <Container
      maxW={1440}
      // mx="auto"
      p={50}
      // mt={70}
      bg="teal.800"
      color="gray.200"
    >
      <SimpleGrid
        // spacingX={10}
        spacing="20"
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        py="50"
        //
        minChildWidth="400"
      >
        {/* section 1 */}

        <Box height={"350px"}>
          <Box borderLeft="5px solid #a41e1e">
            <Heading pl={5} fontSize={30}>
              About us
            </Heading>
          </Box>

          <Box pt={8}>
            <Image src={logo} height={"150"} width={"150"} alt="logo pic" />
          </Box>

          <Box pt={8}>
            <Text>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </Box>
        </Box>
        {/* Section 2 */}
        <Box height={"250px"}>
          <Box borderLeft="5px solid #a41e1e">
            <Heading pl={5} fontSize={30}>
              USEFUL LINKS
            </Heading>
          </Box>
          <Box>
            <br />
            <Box pb={1}>
              <Link href={"/"}>Home</Link>
              <br />
            </Box>
            <Box pb={1}>
              <Link href={"/syllabus"}>Syllabus</Link>
              <br />
            </Box>
            <Box pb={1}>
              <Link href={"/explore"}>Explore</Link>
              <br />
            </Box>
            <Box pb={1}>
              <Link href={"/about"}>About</Link>
              <br />
            </Box>
            <Box pb={1}>
              <Link href={"/contact"}>Contact</Link>
              <br />
            </Box>
          </Box>
        </Box>
        <Box>
          {/* section 3 */}
          <Box height={"250px"}>
            <Box borderLeft="5px solid #a41e1e">
              <Heading pl={5} fontSize={30}>
                FOLLOW US
              </Heading>
            </Box>
            <Box>
              <br />
              <Box pb={1}>
                <Link href={"https://www.facebook.com/groups/piaic/"}>
                  Facebook
                </Link>
                <br />
              </Box>
              <Box pb={1}>
                <Link href={"https://www.youtube.com/@panaverse"}>Youtube</Link>
                <br />
              </Box>
              <Box pb={1}>
                <Link href={"https://twitter.com/Panaverse_edu"}>Twitter</Link>
                <br />
              </Box>
              <Box pb={1}>
                <Link href={"https://www.linkedin.com/company/panaverse/"}>
                  Linkedin
                </Link>
                <br />
              </Box>
              <Box pb={1}>
                <Link href={"https://github.com/panaverse"}>Github</Link>
                <br />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Section 4 */}
        <Box height={"250px"}>
          <Box borderLeft="5px solid #a41e1e">
            <Heading pl={5} fontSize={30}>
              CONTACT US
            </Heading>
          </Box>
          <Box>
            <br />
            <Box pb={1}>
              Phone#: +92 123 4567890
              <br />
            </Box>
            <Box pb={1}>
              Email: abcdefghi@gmail.com
              <br />
            </Box>
            <Box pb={1}>
              Peshawar, Pakistan. <br />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
