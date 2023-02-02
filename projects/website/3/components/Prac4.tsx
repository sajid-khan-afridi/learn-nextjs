import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const CardComponent = ({ cardData }) => (
  <Card maxW="sm" bg={"black"} color="white">
    <CardBody>
      <Image
        src={cardData.imgsrc}
        alt={cardData.imgalt}
        borderRadius="lg"
        h={"150px"}
        w={"280px"}
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{cardData.heading}</Heading>
        <Text>{cardData.text}</Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing="2">
        <Button variant="solid" colorScheme="orange">
          Apply now
        </Button>
        <Button variant="ghost" colorScheme="orange">
          Register Yourself
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
);

export default function Prac4() {
  const cardData = [
    {
      imgsrc:
        "https://images.interestingengineering.com/1200x675/filters:format(webp)/img/iea/yrwQ9NRpwN/istock-1343097411.jpg",
      imgalt: "",
      heading: "Artificial Intelligence",
      text: "A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.",
    },
    {
      imgsrc: "https://miro.medium.com/max/1400/1*hmT21vmPb0MLgFoWov50VA.webp",
      imgalt: "",
      heading: "Cloud Native and Mobile Web Computing Specialist",
      text: "A one year cloud computing program designed for absolute beginners.",
    },
    {
      imgsrc:
        "https://pimages.toolbox.com/wp-content/uploads/2022/10/04121130/Concept-depicting-block-validation-in-the-blockchain-and-digital-ledger.jpg",
      imgalt: "",
      heading: "BLOCKCHAIN SPECIALIST",
      text: "A one year blockchain program designed for absolute beginners getting pakistan ready for the new era ",
    },
    {
      imgsrc:
        "https://www.naval-technology.com/wp-content/uploads/sites/15/2021/10/Internet-of-Things-Technology-Trends.jpg",
      imgalt: "",
      heading: "Internet of Things and AI Specialist",
      text: "A fifteen months iot and ai program designed for absolute beginners",
    },
  ];
  return (
    <Box>
      <Flex justifyContent={"space-between"} mx="10px">
        {cardData.map((card, index) => (
          <Box pr={"5px"} key={index}>
            <CardComponent cardData={card} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
