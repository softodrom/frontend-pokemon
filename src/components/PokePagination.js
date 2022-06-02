import React, { useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import _ from "lodash";
import "./styles/PokemonList.scss";

const PokePagination = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(20);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=400");
    const data = await res.json();

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPost((currentList) => [...currentList, data]);
        await post.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];
  const chunk1 = _.chunk(currentPost, 5);

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="my-3 text-center">
            <button
              className="ui button p-3 pt-1"
              onClick={() => setNumber(number - 1)}
            >
              Previous
            </button>

            {pageNumber.map((Elem) => {
              return (
                <>
                  <button
                    className="ui button p-3 pt-1"
                    onClick={() => ChangePage(Elem)}
                  >
                    {Elem}
                  </button>
                </>
              );
            })}
            <button
              className="ui button p-3 pt-1"
              onClick={() => setNumber(number + 1)}
            >
              Next
            </button>
          </div>

          <div className="pokemon-list-container">
            {chunk1.map((test, index) => (
              <div className="row">
                {test.map((pokemonStats, index) => (
                  <PokemonItem key={index} pokemon={pokemonStats} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokePagination;
