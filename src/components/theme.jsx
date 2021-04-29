import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      // ...
      900: "#171923",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FEFCBF",
    },
    purple: {
      100: "#E9D8FD",
      400: "#9F7AEA",
    },
  },
});
export default theme;
