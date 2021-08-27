/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_PROGRESS_REQUEST, FETCH_PROGRESS_SUCCESS, FETCH_PROGRESS_FAILURE, ADD_PROGRESS,
} from '../store/type';

const fetchProgresRequest = () => ({
  type: FETCH_PROGRESS_REQUEST,

});

const fetchProgresSuccess = (progress) => ({
  type: FETCH_PROGRESS_SUCCESS,
  payload: progress,
});

const fetchProgressFailure = (error) => ({
  type: FETCH_PROGRESS_FAILURE,
  payload: error,

});
export const addProgres = (progObj) => ({
  type: ADD_PROGRESS,
  payload: { progObj },

});

const fetchProgress = (id = 1) => (dispatch) => {
  dispatch(fetchProgresRequest);
  axios.get(`https://intense-spire-98414.herokuapp.com/measurments/${id}/results`)
    .then((response) => {
      const progress = response.data;
      dispatch(fetchProgresSuccess(progress));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchProgressFailure(errorMsg));
    });
};
const addProgress = (prog) => (dispatch) => {
  axios.post(`https://intense-spire-98414.herokuapp.com/measurments/${prog.id}/results?result=${prog.result}`)
    .then((response) => {
      const progress = response.data;
      dispatch(addProgres(progress));
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
    });
};

export {
  fetchProgressFailure, fetchProgresSuccess, fetchProgresRequest, fetchProgress, addProgress,
};
