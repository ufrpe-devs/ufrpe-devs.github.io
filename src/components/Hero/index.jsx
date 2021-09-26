import React from "react"
import { SimpleGrid, Box, Button, useMediaQuery } from "@chakra-ui/react"
import community from "../../assets/community.svg"

import styles from "./styles"

export default function Hero() {
  const [isTinyThan767] = useMediaQuery("(max-width: 767px)")

  return (
    <Box id="home" __css={styles} px={4} mb={8}>
      <SimpleGrid columns={{ md: 1, lg: 2 }} gap={6}>
        <Box w="100%" style={{ margin: "auto" }}>
          <Box
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1,
              width: isTinyThan767 ? "100%" : "90%",
            }}
          >
            Boas vindas ao UFRPE Devs
          </Box>
          <Box
            mt={6}
            style={{
              fontSize: 20,
              fontWeight: 400,
              width: isTinyThan767 ? "100%" : "90%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            blandit lectus ac dapibus suscipit. Ut cursus dignissim velit ut
            fermentum.
          </Box>
          <Button
            bg="brand.secondary"
            color="white"
            mt={6}
            className="hero__community-button--desktop"
          >
            Community
          </Button>
        </Box>
        <Box w="100%" style={{ display: "flex", alignItems: "center" }}>
          <img src={community} alt="community" />
        </Box>
        <Button
          bg="brand.secondary"
          color="white"
          className="hero__community-button--mobile"
        >
          Community
        </Button>
      </SimpleGrid>
    </Box>
  )
}
