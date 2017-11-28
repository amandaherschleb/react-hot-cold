import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {
    return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
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
