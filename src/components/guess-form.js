import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';

import './guess-form.css';

export function GuessForm(props) {
  function onGuess(e) {
    e.preventDefault();

    if (props.onGuess) {
      const value = e.target.value;
      props.dispatch(makeGuess(value));
    }

    target.value = '';
  }

  return (
    <form onSubmit={onGuess}>
      <label htmlFor="userGuess">Enter your Guess</label>
      <input type="text" name="userGuess" id="userGuess"
        className="text" maxLength="3" autoComplete="off"
        placeholder={Math.round(Math.random() * 100)} required />
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
  );
};

export default connect()(GuessCount);
