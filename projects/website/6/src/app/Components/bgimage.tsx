import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

export default function BgImage(prop:any) {
    const {src,title}=prop;
  return (
        <Box bgImage={src} bgSize="cover" py="200" bgAttachment={"fixed"}>
   <Container maxW={"1100"}>
            <Heading color={"whiteAlpha.700"}>{title}</Heading>
   </Container>
        </Box>
  )
}
