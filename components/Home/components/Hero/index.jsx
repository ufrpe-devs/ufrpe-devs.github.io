import { Grid, Box, Button } from "@chakra-ui/react";
import { Community } from "../../../../images";

export default function Hero() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} style={{display: 'flex', height: '80vh'}}>
      <Box w="100%" style={{margin: 'auto'}} >
        <Box style={{fontFamily: 'inter', fontSize: 72, fontWeight: 700, lineHeight: 1}}>
          Boas vindas ao UFRPE Devs
        </Box>
        <Box mt={6} style={{fontFamily: 'inter', fontSize: 20, fontWeight: 400}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lectus ac dapibus suscipit. Ut cursus dignissim velit ut fermentum.
        </Box>
        <Button bg="#00AAFC" color="white" mt={6}>Community</Button>
      </Box>
      <Box w="100%" style={{display: 'flex', alignItems: 'center'}} >
        <Community id="community-home"/>
      </Box>
    </Grid>
  )
}