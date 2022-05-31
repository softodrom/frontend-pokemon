import React, { useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import _ from "lodash";
import "./styles/PokemonList.scss";
// import

const PokemonList = () => {
  // const [chunk, setChunk] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState([
    "https://pokeapi.co/api/v2/pokemon?limit=20",
  ]);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    // const chunk1 = _.chunk(allPokemons, 4);
    // setChunk(chunk1);

    // console.log(chunk);
  };

  // const separateChunks = () => {
  //   const chunk1 = _.chunk(allPokemons, 4);
  //   setChunk(chunk1);
  // };

  // const checkConsole = () => console.log(chunk);

  useEffect(() => {
    // console.log(chunk);
    getAllPokemons();
  }, []);

  const chunk1 = _.chunk(allPokemons, 5);
  // setChunk(chunk1);

  // console.log(chunk);

  return (
    // <div className="app-contaner">
    //   <h1>Pokemons</h1>
    //   <div className="pokemon-container">
    //     <div className="all-container">
    //       {allPokemons.map((pokemonStats, index) => (
    //         // <div class="d-flex flex-row">
    //         <PokemonItem
    //           key={index}
    //           id={pokemonStats.id}
    //           image={pokemonStats.sprites.other.dream_world.front_default}
    //           name={pokemonStats.name}
    //           type={pokemonStats.types[0].type.name}
    //         />
    //         // </div>
    //       ))}
    //     </div>
    //     <button className="load-more" onClick={() => getAllPokemons()}>
    //       Load more
    //     </button>
    //   </div>
    // </div>

    // <div className="">
    //   {allPokemons.map((pokemonStats, index) => (
    //     <div className="d-flex flex-columns mb-4">
    //       {/* <div className="p-2"> */}
    //       <PokemonItem
    //         key={index}
    //         id={pokemonStats.id}
    //         image={pokemonStats.sprites.other.dream_world.front_default}
    //         name={pokemonStats.name}
    //         type={pokemonStats.types[0].type.name}
    //       />
    //     </div>
    //   ))}

    <div className="pokemon-list-container">
      {chunk1.map((test, index) => (
        <div className="row">
          {test.map((pokemonStats, index) => (
            <PokemonItem
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              pokemon={pokemonStats}
            />
          ))}
        </div>
      ))}
    </div>
    // </div>
  );
};

export default PokemonList;
