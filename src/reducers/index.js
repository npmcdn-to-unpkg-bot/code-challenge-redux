import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import challenge from './challenge';
import user from './user';

const rootReducer = combineReducers({
  user,
  challenge,
  routing,
});

export default rootReducer;
