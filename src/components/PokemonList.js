import React, { useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import _ from "lodash";
import "./styles/PokemonList.scss";

const PokemonList = ({ favoritePokemons }) => {
  const [chunks, setChunks] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    setChunks(_.chunk(allPokemons, 1));
  }, [favoritePokemons, allPokemons]);

  useEffect(() => {
    fetchAllPokemons();
  }, [favoritePokemons]);

  const fetchAllPokemons = () => {
    favoritePokemons.forEach(async ({ pokemonID }) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
      const data = await res.json();
      setAllPokemons((currentList) => [...currentList, data]);
    });
  };

  if (chunks.length) {
    return (
      <div className="pokemon-list-container">
        {chunks.map((chunk, index) => (
          <div key={index} className="row">
            {chunk.map((pokemon, index) => {
              const isFavorite = favoritePokemons.some(
                (fav) => fav.pokemonID === pokemon.id
              );
              return (
                <PokemonItem
                  isFavorite={isFavorite}
                  key={index}
                  id={pokemon.id}
                  image={pokemon.sprites.other.dream_world.front_default}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  pokemon={pokemon}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  }
};

export default PokemonList;
