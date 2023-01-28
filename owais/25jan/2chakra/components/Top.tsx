import {
  Heading,
  VStack,
  IconButton,
  useColorMode,
  color,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Top() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        alignSelf="flex-end"
        size="lg"
        isRound
        aria-label="Search database"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        mb="8"
        bgGradient="linear(to-r, pink.500,pink.300,blue.500) "
        bgClip="text"
      >
        Todo Application
      </Heading>
    </>
  );
}
