import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  styles: {
    global: props => ({
      body: {
        fontFamily: "Inter",
      },
    }),
  },
  colors: {
    brand: {
      primary: "#122E4B",
      secondary: "#00AAFC",
      tertiary: "#718096",
    },
  },
})
