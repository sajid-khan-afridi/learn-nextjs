import { Box, Container, Image } from "@chakra-ui/react";

export default function BgImage(prop:any) {
    const {img,alt,title}=prop;
  return (
   <Container maxW={"1440"}>
        <Box bgImage={img}>
            
        </Box>
   </Container>
  )
}
