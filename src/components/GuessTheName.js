import React, { useState, useEffect } from "react";
import axios from "axios";

const GuessTheName = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState("");
  const [guessName, setGuessName] = useState("");
  // const [start, setStart] = useState(0);
  const [Img, setImg] = useState("");
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      //   console.log(res);
      setImg(res.data.sprites.other.dream_world.front_default);
      //   setType(res.data.types[0].type.name);
    }

    getData();
  }, [num]);

  const startGame = () => {
    // const min = 1;
    const max = 500;
    const rand = Math.floor(Math.random() * max);
    setNum(rand);
  };

  const checkAnswer = () => {
    setAnswer(true);
    console.log(answer);
  };

  return (
    <div>
      <button class="ui button" onClick={startGame}>
        Start
      </button>
      <button class="ui button" onClick={startGame}>
        Continue
      </button>
      <img src={Img} alt=""></img>

      <div class="ui right labeled left icon input">
        <form className="">
          <i class="eye icon" />
          <input
            className="ui input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="ui tag label" onClick={checkAnswer}>
            Submit
          </button>
        </form>
      </div>
      {name}
    </div>
  );
};

export default GuessTheName;
