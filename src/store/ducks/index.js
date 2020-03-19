import {combineReducers} from 'redux';

import info from './info';

const reducers = combineReducers({
  info,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
