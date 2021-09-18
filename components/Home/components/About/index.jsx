import { SimpleGrid, Box, useMediaQuery } from "@chakra-ui/react";
import { AdmBuildingUfrpe } from "../../../../images";

export default function About() {
  const [isTinyThan767] = useMediaQuery("(max-width: 767px)")

  return (
    <Box id="about-us">
      <Box class="box">
        <Box className="title-anchor">Sobre nós</Box>
        <Box className="subtitle">Lorem ipsum dolor sit amet</Box>
        <Box className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse blandit lectus ac dapibus suscipit. 
          Ut cursus dignissim velit ut fermentum. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Suspendisse blandit lectus ac dapibus suscipit. 
          Ut cursus dignissim velit ut fermentum. 
        </Box>
        <br/>
        <br/>
        <br/>
        <SimpleGrid columns={{md: 1, lg: 2}} gap={20} id="grid-about-us">
          <Box w="100%">
            <img src="/adm-building-ufrpe.png" className="box-shadow-image"/>
          </Box>
          <Box w="100%" textAlign="left">
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse blandit lectus ac dapibus suscipit. 
              Ut cursus dignissim velit ut fermentum. 
            </Box>
            <br/>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse blandit lectus ac dapibus suscipit. 
              Ut cursus dignissim velit ut fermentum. 
            </Box>
            <br/>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse blandit lectus ac dapibus suscipit. 
              Ut cursus dignissim velit ut fermentum. 
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}