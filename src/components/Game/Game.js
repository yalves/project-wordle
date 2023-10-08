import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import SadBanner from "../SadBanner/SadBanner";
import HappyBanner from "../HappyBanner/HappyBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleSubmit(guess) {
    let newGuess = {
      label: guess,
      id: crypto.randomUUID(),
    };
    let newGuesses = [...guesses, newGuess];
    console.log(newGuess);
    console.log(guesses);

    setGuesses(newGuesses);
    if (guess === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      {gameStatus === "playing" ? (
        <GuessInput handleSubmit={handleSubmit} />
      ) : gameStatus === "won" ? (
        <HappyBanner numberOfGuesses={guesses.length} />
      ) : (
        <SadBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
