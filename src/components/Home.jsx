import React from "react";
import { Button, Box, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import theme from "./theme";

function Home() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          py="7"
          //   my="7"
          bg="purple.400"
        >
          <Link to="/search">
            <Button
              w="200px"
              height="50px"
              bg="white"
              color="red"
              fontSize="18px"
              _hover={{ bg: "red", color: "white" }}
            >
              Search your Pokemon
            </Button>
          </Link>
          <Link to="/allpokemons">
            <Button
              w="200px"
              height="50px"
              fontSize="18px"
              fontFamily="Arial"
              bg="red"
              color="white"
              _hover={{ bg: "white", color: "red" }}
            >
              Show All Pokemons
            </Button>
          </Link>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Home;
