/* eslint-disable no-console */
import axios from 'axios';
import { FETCH_PROGRESS_REQUEST, FETCH_PROGRESS_SUCCESS, FETCH_PROGRESS_FAILURE } from '../store/type';

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

const fetchProgress = (id) => (dispatch) => {
  dispatch(fetchProgresRequest);
  axios.get(`https://intense-spire-98414.herokuapp.com/measurments/${id}/results`)
    .then((response) => {
      const progress = response.data;
      dispatch(fetchProgresSuccess(progress));
      console.log(progress);
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchProgressFailure(errorMsg));
    });
};

export {
  fetchProgressFailure, fetchProgresSuccess, fetchProgresRequest, fetchProgress,
};
