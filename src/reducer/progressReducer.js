import { FETCH_PROGRESS_FAILURE, FETCH_PROGRESS_REQUEST, FETCH_PROGRESS_SUCCESS } from '../store/type';

const initialState = {
  isLoading: false,
  progress: [{ id: 1, result: 20 }],
  error: '',

};

const ProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROGRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        progress: [],
        error: '',

      };
    case FETCH_PROGRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        progress: action.payload,
        error: '',

      };
    case FETCH_PROGRESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        progress: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ProgressReducer;
