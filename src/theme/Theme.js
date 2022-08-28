import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
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
  variants: {
    'pink': {
      bg: '#E23072',
      boxShadow: '0 0 2px 2px #efdfde',
    },
  },
})
