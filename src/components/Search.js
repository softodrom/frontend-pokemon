import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";
import "./Search.css";

const Search = () => {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");
  const [Pokemon, setPokemon] = useState("");
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      setImg(res.data.sprites.other.dream_world.front_default);
      setType(res.data.types[0].type.name);
      setPokemon(res.data);
    }

    getData();
  }, [Find]);

  const addToFavorites = (pokemon) => {
    // console.log(pokemon.id);
    // console.log(currentUser.id);
    async function sendData() {
      let res = await axios.post("http://127.0.0.1:8080/addFavorite", {
        pokemonID: pokemon.id,
        userId: currentUser.id,
      });
      // .then((response)  => this.setState({ articleId: response.data.id }));
      // console.log(res);
    }
    sendData();
  };

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name.toLowerCase());
    setname("");
  };

  return (
    <div>
      <div class="ui input">
        <input type="text" onChange={Typename} value={name} />
      </div>

      <button onClick={Search} className="ui button mt-3">
        Search
      </button>
      <div className="container card">
        {/* <div>{Pokemon.name.toUpperCase()}</div> */}
        <img src={Img} />
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">Type</div>
              <div className="divTableCell">{Type}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Height</div>
              <div className="divTableCell"> {Pokemon.height} cm</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Weight</div>
              <div className="divTableCell">
                {Math.round(Pokemon.weight / 4.3)} kg
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Number of Battles</div>
              <div className="divTableCell">{Pokemon.base_experience}</div>
            </div>
          </div>
        </div>
        <div className="ui button mt-5" onClick={() => addToFavorites(Pokemon)}>
          <i className="heart icon"></i> Like
        </div>
        <div className="ui button mt-2">More</div>
      </div>
    </div>
  );
};

export default Search;
