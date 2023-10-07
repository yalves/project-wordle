import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  const letters = word.split("");

  return (
    <p class="guess">
      {range(0, 5).map((_, index) => (
        <span className="cell">{letters[index]}</span>
      ))}
    </p>
  );
}

export default Guess;
