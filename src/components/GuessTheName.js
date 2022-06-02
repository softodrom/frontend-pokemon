import React, { useState, useEffect } from "react";
import axios from "axios";

const GuessTheName = () => {
  const [num, setNum] = useState(Math.floor(Math.random() * 500));
  const [name, setName] = useState("");
  const [guessName, setGuessName] = useState("");
  const [Img, setImg] = useState("");
  const [answer, setAnswer] = useState(false);

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
  };

  const checkAnswer = () => {
    // setAnswer(true);
    console.log(name === guessName);
  };

  return (
    <div>
      <button className="ui button" onClick={startGame}>
        Continue
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
          <div className="ui button mt-5" onClick={() => checkAnswer()}>
            Submit
          </div>
        </form>
      </div>
      {name}
    </div>
  );
};

export default GuessTheName;
