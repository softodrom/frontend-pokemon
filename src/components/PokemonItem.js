import React from "react";
import axios from "axios";
import "./styles/PokemonItem.scss";
import AuthService from "../services/auth.service";
import { computeHeadingLevel } from "@testing-library/react";

const PokemonItem = ({ id, name, image, type, pokemon }) => {
  const currentUser = AuthService.getCurrentUser();

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

  return (
    <div className="pokemon-container">
      <div className="pokemon-list-item">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
        <div className="name">{pokemon.name}</div>
        <div className="props-container">
          <div className="prop">
            <p className="label">Height</p>
            <p className="value">{pokemon.height}</p>
          </div>
          <div className="prop">
            <p className="label">Weight</p>
            <p className="value">{pokemon.weight}</p>
          </div>
          <div className="prop">
            <p className="label">Abilities</p>
            <div className="value abilities">
              {pokemon.abilities.map((abilityItem, index) => {
                if (index > 1) return null;
                return (
                  <p key={abilityItem.ability.name}>
                    {abilityItem.ability.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div
            className="ui button mt-5"
            onClick={() => addToFavorites(pokemon)}
          >
            <i className="heart icon"></i> Like
          </div>
          <div className="ui button mt-2">More</div>
        </div>

        {/* <div className="pokemon-footer">
          <button
            className="see-details-button"
            onClick={() => {
              dispatch({
                type: PokemonActionTypes.SELECT_POKEMON,
                payload: pokemon.id,
              });
              history.push(`/pokemon/detail/`);
            }}
          >
            See Details
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default PokemonItem;
