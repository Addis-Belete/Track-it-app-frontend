import { ADD_PROGRESS } from '../store/type';

const initailState = {
  progress: 20,

};
const addProgressReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_PROGRESS:
      return {
        ...state,
        progress: action.payload,

      };
    default:
      return state;
  }
};
export default addProgressReducer;
