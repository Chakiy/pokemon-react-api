import React, { useState, useEffect } from "react";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import AllPokemons from "./components/AllPokemons";
import Detail from "./components/Detail";
import Po from "./components/Po";
import Home from "./components/Home";

function App() {
  const [toSearch, setToSearch] = useState("");
  const [pokemonsData, setPokemonsData] = useState([]);

  const [poki, setPoki] = useState([]);

  useEffect(() => {
    // console.log("render");

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${toSearch}/`)
      .then((response) => {
        // console.log(response.data);
        setPoki(response.data);
      });
    return () => {
      setPoki(poki);
    };
  }, [toSearch]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0"`)
      .then((response) => {
        // console.log(response.data.results);
        setPokemonsData(response.data.results);
      });
  }, [setPokemonsData]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Router>
        <Home />
        <Switch>
          <Route
            path="/search"
            component={() => (
              <>
                <Search
                  toSearch={toSearch}
                  setToSearch={setToSearch}
                  cap={capitalizeFirstLetter}
                />
                {toSearch && (
                  <Detail
                    poki={poki}
                    toSearch={toSearch}
                    cap={capitalizeFirstLetter}
                  />
                )}
              </>
            )}
          />

          <Route
            path="/allpokemons"
            component={() => (
              <AllPokemons
                pokemonsData={pokemonsData}
                cap={capitalizeFirstLetter}
              />
            )}
          />

          {/* <Route
            path="/pokemon/:name"
            component={() => (
              <Detail poki={poki} toSearch="" cap={capitalizeFirstLetter} />
            )}
          /> */}
          <Route path="/pokemon/:name" component={() => <Po toSearch="" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
