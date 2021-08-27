import { combineReducers } from 'redux';
import addProgressReducer from './addProgressReducer';
import ProgressReducer from './progressReducer';

const rootReducer = combineReducers({
  progress: ProgressReducer,
  addProgress: addProgressReducer,

});
export default rootReducer;
