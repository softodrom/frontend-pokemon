import React, { useEffect, useState } from "react";
// import pokeapi from "../api/pokeapi";
import axios from "axios";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      // console.log(res.data.name);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <div>
      <h1>
        you choose <span> {num} value</span>
      </h1>
      <h1>
        My name is <span> {name}</span>
      </h1>
      <h1>
        I have <span> {moves} moves </span>
      </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1"> 1</option>
        <option value="25"> 25</option>
        <option value="13"> 13</option>
        <option value="55"> 55</option>
        <option value="23"> 23</option>
      </select>
    </div>
  );
};

export default Pokemon;
