import {combineReducers} from 'redux';

import history from './history';

const reducers = combineReducers({
  history,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
