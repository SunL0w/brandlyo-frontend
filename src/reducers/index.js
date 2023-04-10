import { combineReducers } from 'redux';
import userReducer from './userReducer';
import nameGeneratorReducer from './nameGeneratorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  nameGenerator: nameGeneratorReducer,
});

export default rootReducer;
