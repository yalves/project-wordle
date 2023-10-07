import React from "react";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ label, id }) => (
        <p className="guess" key={id}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
