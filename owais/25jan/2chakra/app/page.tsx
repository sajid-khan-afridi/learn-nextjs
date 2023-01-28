"use client";

import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Top from "@/components/Top";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack p={4}>
      <Top />
      <TodoList />
      <AddTodo />
    </VStack>
  );
}
