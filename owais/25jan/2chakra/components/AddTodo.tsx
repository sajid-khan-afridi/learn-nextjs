import { Button, HStack, Input } from "@chakra-ui/react";

function AddTodo() {
  function handleSubmit(e: any) {}
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="add your todo" />
        <Button px="8" colorScheme="pink" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
