"use client";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { totext: "todo 1", completed: true },
    { totext: "todo 2", completed: false },
    { totext: "todo 3", completed: true },
    { totext: "todo 4", completed: false },
  ]);
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.totext}>
          <Text>{todo.totext}</Text>
          <Spacer />
          <IconButton
            isRound
            aria-label="Search database"
            icon={<AiFillDelete />}
          />
        </HStack>
      ))}
    </VStack>
  );
}
