import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import axios from "axios";
import PokemonList from "../components/PokemonList";

const BoardUser = () => {
  const currentUser = AuthService.getCurrentUser();
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    console.log(favoritePokemons, "fav");
  }, [favoritePokemons]);

  const getFavorites = async () => {
    async function fetchData() {
      let res = await axios
        .get(`http://127.0.0.1:8080/getFavById?id=${currentUser.id}`)
        .catch(console.error);
      console.log(res.data);
      setFavoritePokemons(res.data);
    }

    await fetchData();
  };

  return (
    <div className="container">
      <PokemonList favoritePokemons={favoritePokemons} />
    </div>
  );
};
export default BoardUser;
