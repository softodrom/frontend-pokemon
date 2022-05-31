import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      // console.log(res);
      setImg(res.data.sprites.other.dream_world.front_default);
      setType(res.data.types[0].type.name);
    }

    getData();
  }, [Find]);

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name);
    setname("");
  };

  return (
    <div>
      <input type="text" onChange={Typename} value={name} />

      <button onClick={Search}>Search</button>
      <div className="container card">
        <img src={Img} />
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">Type</div>
              <div className="divTableCell">{Type}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Height</div>
              <div className="divTableCell"> {Math.round(1 * 3.9)}"</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Weight</div>
              <div className="divTableCell"> {Math.round(1 / 4.3)} lbs</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Number of Battles</div>
              <div className="divTableCell">{name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

// hp atack defence species
