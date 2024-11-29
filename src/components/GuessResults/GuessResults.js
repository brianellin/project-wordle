import React from 'react';
import { range } from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import Guess from '../Guess';

function GuessResults({guesses, answer}) {

  return (
  <>
  <div className="guess-results">

  {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
    <p className="guess" key={`gr-${row}`}>
      <Guess guess={guesses[index]} answer={answer}/>
    </p>
  ))}
</div>
  </>);
}

export default GuessResults;
