import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  palette: {
    blue: {
      main: "#0044FF",
    },
    pink: {
      main: '#E23072',
    },
    black: {
      main: "#000"
    },
    white: {
      main: "#fff"
    }
  },
})
