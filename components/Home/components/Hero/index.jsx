import { SimpleGrid, Box, Button, useMediaQuery } from "@chakra-ui/react";
import { Community } from "../../../../images";

export default function Hero() {
  const [isTinyThan767] = useMediaQuery("(max-width: 767px)")

  return (
    <Box id="home">
      <SimpleGrid columns={{md: 1, lg: 2}} gap={6}>
        <Box w="100%" style={{margin: 'auto'}} >
          <Box style={{fontSize: 72, fontWeight: 700, lineHeight: 1, width: isTinyThan767? '100%': '90%'}}>
            Boas vindas ao UFRPE Devs
          </Box>
          <Box mt={6} style={{fontSize: 20, fontWeight: 400, width: isTinyThan767? '100%': '90%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lectus ac dapibus suscipit. Ut cursus dignissim velit ut fermentum.
          </Box>
          <Button bg="#00AAFC" color="white" mt={6} id="hero-community-button-1">Community</Button>
        </Box>
        <Box w="100%" style={{display: 'flex', alignItems: 'center'}} >
          <Community id="community-home"/>
        </Box>
        <Button bg="#00AAFC" color="white" id="hero-community-button-2">Community</Button>
      </SimpleGrid>
    </Box>
  )
}