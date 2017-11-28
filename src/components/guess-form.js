import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log('onSubmit called')
    e.preventDefault();

    const value = this.refs["userGuess"].value;
    this.props.dispatch(makeGuess(value));
    
    this.refs["userGuess"].value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="userGuess">Enter your Guess</label>
        <input type="text" name="userGuess" id="userGuess"
          className="text" maxLength="3" autoComplete="off"
          placeholder={Math.round(Math.random() * 100)}
          ref="userGuess" required />
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
      </form>
    );
  }

};

export default connect()(GuessForm);
