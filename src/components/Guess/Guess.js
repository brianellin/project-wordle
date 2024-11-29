import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({guess, answer}) {

  let result = undefined;
  if (guess) {
    console.log("Checking",guess, answer);
    result = checkGuess(guess, answer);
  }

  return (<>
  {range(5).map((col) => (
    <span className={`cell ${result ? result[col].status : ''}`} key={`gc-${col}`}>
      {guess ? guess[col] : ''}
      </span>
  ))}
  </>);
}

export default Guess;
