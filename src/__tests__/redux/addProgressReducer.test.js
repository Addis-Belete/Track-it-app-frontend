import addProgressReducer from '../../reducer/addProgressReducer';
import { ADD_PROGRESS } from '../../store/type';

describe('Add Progress reducer', () => {
  it('should return initial state', () => {
    const state = addProgressReducer(undefined, { type: '' });
    expect(state).toEqual({ progress: 20 });
  });
  it('should handle ADD_PROGRESS ', () => {
    const startAction = {
      type: ADD_PROGRESS,

    };
    expect(addProgressReducer({}, startAction)).toEqual({
      progress: undefined,
    });
  });
  it('should not return empty object', () => {
    const startAction = {
      type: ADD_PROGRESS,
      payload: {
        progress: [1, 3, 4],

      },

    };
    expect(addProgressReducer({}, startAction)).not.toEqual({});
  });
});
