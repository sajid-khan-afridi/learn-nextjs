import { Button, HStack, Input } from "@chakra-ui/react";

function AddTodo() {
  function handleSubmit(e: any) {}
  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input variant="filled" placeholder="add your todo" />
        <Button p={4} colorScheme="teal" variant="outline">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
