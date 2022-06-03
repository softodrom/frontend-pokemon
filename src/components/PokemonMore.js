import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import axios from "axios";
import PokePagination from "./PokePagination";

const PokemonMore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pokemon = location.state.pokemon;

  useEffect(() => {
    // console.log(pokemon);
    // console.log(location.state.pokemon);
  });
  //   const [pokemon, setPokemon] = useState("");
  //   const [num, setNum] = useState(1);

  //   async function getData() {
  //     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  //     setPokemon(res.data);
  //   }

  //   getData();

  //   useEffect(() => {
  //     async function getData() {
  //       let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  //       setPokemon(res.data);
  //     }

  //     getData();
  //   });

  return (
    <div className={`pokemon-detail-container`}>
      <button className="ui button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {pokemon ? (
        <div className="wrapper">
          <div className="pokemon">
            {/* <button onClick={() => history.push("/")}>Back</button> */}
            <div className="img-container">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
            <p className="pokemon-name">{pokemon.name}</p>
            <div className="pokemon-props">
              Height: {pokemon.height} &nbsp; Weight: {pokemon.height} &nbsp;
              Base experience: {pokemon.base_experience} &nbsp; Default:{" "}
              {pokemon.is_default ? "True" : "False"} &nbsp; Order:{" "}
              {pokemon.order} &nbsp; Species: {pokemon.species.name}
            </div>
            <Dropdown
              label={"Abilities"}
              renderData={pokemon.abilities.map((a) => {
                return <li key={a.ability.name}>{a.ability.name}</li>;
              })}
            />
            <Dropdown
              label={"Forms"}
              renderData={pokemon.forms.map((form) => {
                return <li key={form.name}>{form.name}</li>;
              })}
            />
            <Dropdown
              label={"Types"}
              renderData={pokemon.types.map((type) => {
                return <li key={type.type.name}>{type.type.name}</li>;
              })}
            />
            <Dropdown
              label={"Game Indices"}
              renderData={pokemon.game_indices.map((gi) => {
                return <li key={gi.version.name}>{gi.version.name}</li>;
              })}
            />
            {pokemon?.stats !== undefined && (
              <Dropdown
                label={"Stats"}
                renderData={pokemon.stats.map((stat) => {
                  return (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  );
                })}
              />
            )}
            <Dropdown
              label={"Moves"}
              renderData={pokemon.moves.map((move, index) => {
                if (index === pokemon.moves.length - 1) {
                  return move.move.name + " ";
                }
                return move.move.name + ", ";
              })}
            />
          </div>
        </div>
      ) : (
        <button class="ui loading button">Loading</button>
      )}
    </div>
  );
};

export default PokemonMore;
