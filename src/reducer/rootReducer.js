import { combineReducers } from 'redux';
import ProgressReducer from './progressReducer';

const rootReducer = combineReducers({
  progress: ProgressReducer,

});
export default rootReducer;
