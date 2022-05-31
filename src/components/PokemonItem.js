import React from "react";
import "./styles/PokemonItem.scss";

const PokemonItem = ({ id, name, image, type, pokemon }) => {
  return (
    // <div className="col">
    //   <div className="thump-container p-3">
    //     <div className="number">
    //       <small>#0{id}</small>
    //     </div>
    //     <img src={image} alt={name} className="pokemon-image" />
    //     <div className="detail-wrapper">
    //       <h3>{name}</h3>
    //       <small>Type: {type}</small>
    //     </div>
    //   </div>
    // </div>
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
