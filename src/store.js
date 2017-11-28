import {createStore} from 'redux'

import {gameReducer} from './reducers';

export default createStore(gameReducer);
