import ProgressReducer from '../../reducer/progressReducer';
import { FETCH_PROGRESS_REQUEST, FETCH_PROGRESS_SUCCESS } from '../../store/type';

describe('progress reducer', () => {
  it('should return the initial state', () => {
    const state = ProgressReducer(undefined, { type: '' });
    expect(state).toEqual({
      error: '',
      isLoading: false,
      progress: [
        {
          id: 1,
          result: 20,
        },
      ],
    });
  });
  it('should handle FETCH_PROGRESS_REQUEST', () => {
    const requestAction = {
      type: FETCH_PROGRESS_REQUEST,
    };
    expect(ProgressReducer({}, requestAction)).toEqual({ isLoading: true, error: '', progress: [] });
  });
  it('should handle FETCH_PROGRESS_SUCCESS', () => {
    const progress = [1, 3, 4];
    const successAction = {
      type: FETCH_PROGRESS_SUCCESS,
      payload: progress,
    };
    expect(ProgressReducer({}, successAction)).toEqual({
      error: '',
      isLoading: false,
      progress: [
        1,
        3,
        4,
      ],
    });
  });
});
