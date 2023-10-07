import React from "react";

function GuessInput({ handleSubmit }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(guess);
        setGuess("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
