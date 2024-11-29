import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  React.useEffect(() => {
    checkGameStatus();
  }, [guesses]);

  function checkGameStatus() {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    } else if (guesses.includes(answer)) {
      setGameStatus('won');
    }
  }

  return <>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} gameStatus={gameStatus} checkGameStatus={checkGameStatus}/>
  </>;
}

export default Game;
