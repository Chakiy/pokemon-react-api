import {
  Box,
  Text,
  Image,
  ChakraProvider,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail(props) {
  const name = useParams();
  const pokemon = props.toSearch ? props.toSearch : name;
  const [detail, setDetail] = useState([]);

  console.log(name);
  // console.log(props);
  console.log(pokemon);

  useEffect(() => {
    // console.log("render");

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.name}/`)
      .then((response) => {
        console.log(response.data);
        setDetail(response.data);
      });
    // return () => {
    //   setPoki(poki);
    // };
  }, []);

  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
            Name of pokemon: {cap(name.name)}
          </Text>

          <Text fontSize={"20px"} m="2" fontFamily="Open Sans">
            Pokemon Type:{" "}
            {detail.types &&
              detail.types.map((d) => cap(d.type.name)).join(", ")}
          </Text>
          <Text fontSize={"20px"} m="2" fontFamily="Open Sans">
            Weight: {detail.weight && detail.weight}
            kg
          </Text>
          {/* {console.log(name)} */}
          {detail.id ? (
            <Image
              borderRadius="50%"
              border="2px"
              borderColor="gold"
              w="300px"
              mt="6"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detail.id}.png`}
              alt={detail.name}
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
