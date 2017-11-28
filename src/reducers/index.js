import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {

    let feedback
    const guess = parseInt(action.guess, 10);

    if (isNaN(guess)) {
      feedback = 'Please enter a valid number';

      return Object.assign({}, state, {
        feedback
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);

    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
      feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    }
    else {
      feedback = 'You got it!';
    }

    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback
    });
  }

  else if (action.type === actions.SHOW_INFO) {
    return Object.assign({}, state, {
      showInfoModal: actions.show
    });
  }

  else if (action.type === actions.NEW_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      showInfoModal: false
    });
  }

  return state;
};
