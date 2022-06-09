import { combineReducers } from 'redux';

import teamSlice from './teamSlice';
import playerSlice from './playerSlice';

const reducers = combineReducers({
  team: teamSlice,
  player: playerSlice
});

export default reducers;