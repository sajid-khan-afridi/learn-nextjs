import { Box, Button } from "@chakra-ui/react";

export default function PseudoClass() {
  return (
    <Box>
        <Button p="10px 30px" colorScheme="red" _hover={{background:"blue"}} _focus={{background:"yellow", color:"black"}} >Click me</Button>
    </Box>
  )
}
