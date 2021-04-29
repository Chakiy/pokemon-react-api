import React from "react";
import { Grid, Box, Text, Image, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import theme from "./theme";

function AllPokemons({ pokemonsData }) {
  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // console.log(pokemonsData);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} bg={"purple.100"}>
          {pokemonsData.map((pokemon, index) => (
            <Box
              mt="6"
              w="65%"
              // bg="green"
              key={index}
              display="flex"
              flexDirection="column-reverse"
              justifyContent="center"
              alignItems="center"
              fontSize="4xl"
            >
              <Box
                w="100%"
                h="50%"
                bg="white"
                borderBottomRadius="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Link to={`/pokemon/${pokemon.name}`}>
                  <Text fontSize="24px">{cap(pokemon.name)}</Text>
                </Link>
              </Box>
              <Box
                w="100%"
                h="50%"
                bg="red"
                borderTopRadius="100%"
                display="flex"
                flexDirection="column-reverse"
                justifyContent="center"
                alignItems="center"
              >
                <Link to={`/pokemon/${pokemon.name}`}>
                  <Box>
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      alt={pokemon.name}
                    />
                  </Box>
                </Link>
              </Box>
            </Box>
          ))}
        </Grid>
      </ChakraProvider>
    </>
  );
}

export default AllPokemons;
