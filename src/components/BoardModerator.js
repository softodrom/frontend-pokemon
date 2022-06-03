import React, { useState, useEffect } from "react";
import PokemonMore from "./PokemonMore";
import axios from "axios";
import Dropdown from "./Dropdown";
// import Button from "react-bootstrap/Button";

// or less ideally
// import { Button } from "react-bootstrap";

const BoardModerator = () => {
  // const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  // const [Img, setImg] = useState("");
  // const [Type, setType] = useState("");
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      // setImg(res.data.sprites.other.dream_world.front_default);
      // setType(res.data.types[0].type.name);
      setPokemon(res.data);
    }

    getData();
  }, []);

  return (
    <div>
      {/* <PokemonMore pokemon={pokemon} /> */}
      For test
    </div>
  );
};

export default BoardModerator;
