import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        let word = guesses[index] ? guesses[index].label : "";
        let key = guesses[index] ? guesses[index].id : crypto.randomUUID();
        return <Guess word={word} key={key} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResult;
