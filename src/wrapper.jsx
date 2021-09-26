import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import theme from "./styles/theme"
import Layout from "./components/layout"

export const pageWrapper = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
