import { combineReducers } from 'redux';

import fromCities from './sessionReducer';

const appReducer = combineReducers({
  fromCities
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

