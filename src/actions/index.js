// Things the user can do:
// make guess
// view info (showInfoModal)
// start new game

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const SHOW_Info = 'SHOW_INFO';
export const showInfo = (show) => ({
    type: SHOW_INFO,
    show
});

export const NEW_GAME = 'NEW_GAME';
export const makeGuess = () => ({
    type: NEW_GAME
});
