import {
  Box,
  Container,
  SimpleGrid,
  Image,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function MiniCards() {
  return (
    <Container
      maxW={1440}
      // mx="auto"
      p={50}
      // mt={50}
      mt={{ base: "0", md: "20", lg: "50" }}
      // bgImage="./images/flag.jpg"
      // backgroundRepeat={"no-repeat"}
      // backgroundSize="cover"
      // opacity={"0.3"}
      // color="green.100"

      // bg="teal.500"
      // color="gray.200"

      color="blackAlpha.800"
    >
      <SimpleGrid
        // spacingX={10}
        spacing="20"
        templateColumns={{
          base: "repeat(1,1fr)",

          md: "repeat(2,1fr)",
          lg: "repeat(5,1fr)",
        }}
        // py="50"
        //
        minChildWidth="400"
      >
        {/* section 1 */}
        <VStack>
          <Image
            borderRadius="full"
            boxSize="100px"
            alt="Sir Zia Khan"
            src="./images/zia.jpg"
          />
          <Heading fontSize={"20"}>Zia Khan </Heading>
          <Text align={"center"}>
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </VStack>

        <VStack>
          <Image
            borderRadius="full"
            boxSize="100px"
            alt="Sir Daniyal"
            src="./images/daniyal.jpeg"
          />
          <Heading fontSize={"20"}>Daniyal Nagori</Heading>
          <Text align={"center"}>
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </VStack>

        <Box>
          <VStack>
            <Image
              borderRadius="full"
              boxSize="100px"
              alt="Madam Hira Khan"
              src="./images/hirakhan.jpg"
            />
            <Heading fontSize={"20"}>Hira Khan</Heading>
            <Text align={"center"}>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </VStack>
        </Box>

        <Box>
          <VStack>
            <Image
              borderRadius="full"
              boxSize="100px"
              alt="Adil Altaf"
              src="./images/adil.jpeg"
            />
            <Heading fontSize={"20"}>Adil Altaf</Heading>
            <Text align={"center"}>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </VStack>
        </Box>

        <Box>
          <VStack>
            <Image
              borderRadius="full"
              boxSize="100px"
              alt="Zeeshan Hanif"
              src="./images/zeeshan.jpeg"
            />
            <Heading fontSize={"20"}>Zeeshan Hanif</Heading>
            <Text align={"center"}>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
