import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ word, answer }) {
  const letters = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(0, 5).map((_, index) => {
        return word === "" ? (
          <span className="cell" key={`${index}`}></span>
        ) : (
          <span className={`cell ${letters[index].status}`} key={`${index}`}>
            {letters[index].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
