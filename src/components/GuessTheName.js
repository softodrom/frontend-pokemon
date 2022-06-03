import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";

const GuessTheName = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 500));
  const [name, setName] = useState("");
  const [guessName, setGuessName] = useState("");
  const [Img, setImg] = useState("");
  const [answer, setAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setImg(res.data.sprites.other.dream_world.front_default);
      setGuessName(res.data.name);
      console.log(res.data.name);
    }

    getData();
  }, [num]);

  const startGame = () => {
    const max = 500;
    const rand = Math.floor(Math.random() * max);
    setNum(rand);
    setFalse();
  };

  const setFalse = () => {
    setAnswer(false);
    setWrongAnswer(false);
  };

  const addStar = () => {
    async function sendData() {
      let res = await axios.post("http://127.0.0.1:8080/test", {
        id: currentUser.id,
      });
      // console.log(res);
    }
    sendData();
  };

  const checkAnswer = () => {
    // setAnswer(true);
    console.log(name === guessName);
    if (name === guessName) {
      setAnswer(true);
      addStar();
      setWrongAnswer(false);
      // startGame();
    } else {
      setWrongAnswer(true);
    }
  };

  return (
    <div>
      <button className="ui button" onClick={startGame}>
        Refresh
      </button>
      <img src={Img} alt="guessName"></img>

      <div class="ui right labeled left icon input">
        <form className="">
          <div class="ui input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className={`ui button mt-5 ${answer ? "green" : ""}  ${
              wrongAnswer ? "red" : ""
            }`}
            onClick={() => checkAnswer()}
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuessTheName;
