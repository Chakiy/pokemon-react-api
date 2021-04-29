import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ChakraProvider,
  // Grid,
  // GridItem,
  // Box,
  // Text,
  // Image,
} from "@chakra-ui/react";
import theme from "./theme";

function Search(props) {
  const [input, setInput] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.setToSearch(input);
        }}
      >
        <ChakraProvider theme={theme}>
          <FormControl
            id="film"
            w="100%"
            bg="orange"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <FormLabel fontSize="40px" m="5">
              Search your Pokemon
            </FormLabel>
            <Input
              type="text"
              w="50%"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input && (
              <FormHelperText fontSize="20px" m="5">
                You are looking for {props.cap(input)}
              </FormHelperText>
            )}
            <Button type="submit" height="48px" width="150px" bg="white" m="5">
              Search
            </Button>
          </FormControl>
        </ChakraProvider>
      </form>
    </>
  );
}

export default Search;
