import {
  Box,
  Text,
  Image,
  ChakraProvider,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

function Detail(props) {
  const name = useParams(props.toSearch);
  const pokemon = props.toSearch ? props.toSearch : name;
  // const { match } = props;
  // const { params } = params
  // const {  }
  // const [poki, setPoki] = useState([]);
  // const [pokemonD, setPokemonD] = useState("");
  console.log(name);
  console.log(props);
  console.log(pokemon);

  return (
    <>
      <ChakraProvider>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize={"20px"} m="2" fontFamily="Open Sans">
            Name of pokemon: {props.cap(pokemon)}
            {/* {props.poki.name ? props.poki.name :  } */}
            {/* probleem als ik wil naam in hoofdletter zetten met functie cap doorgegeven via props */}
          </Text>
          {/* {props.cap(props.toSearch)} */}
          <Text fontSize={"20px"} m="2" fontFamily="Open Sans">
            {/* {console.log(poki)} */}
            Pokemon Type:
            {props.poki.types &&
              props.poki.types.map((t) => props.cap(t.type.name)).join(", ")}
          </Text>
          <Text fontSize={"20px"} m="2" fontFamily="Open Sans">
            Weight: {props.poki.weight && props.poki.weight}
            kg
          </Text>
          {/* {console.log(name)} */}
          {props.poki.id ? (
            <Image
              borderRadius="50%"
              border="2px"
              borderColor="gold"
              w="300px"
              mt="6"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.poki.id}.png`}
              alt={props.poki.name && props.poki.name}
            />
          ) : (
            <CircularProgress isIndeterminate color="green" />
          )}
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Detail;
