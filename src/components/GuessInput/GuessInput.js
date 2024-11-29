import React from 'react';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({guesses, setGuesses, answer, gameStatus}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuesses([...guesses, guess]);
    setGuess('');
  }

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (

    <>
    {gameStatus === 'running' && (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED} 
      />
    </form>
    )}

    {gameStatus === 'won' && (
      <div className="happy banner">
        <p>Congratulations! You guessed the word in <strong>{guesses.length}</strong> guesses!</p>
      </div>
    )}

    {gameStatus === 'lost' && (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )}
    </>
  );
}

export default GuessInput;