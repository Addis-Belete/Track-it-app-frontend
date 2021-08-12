import { FETCH_PROGRESS_REQUEST, FETCH_PROGRESS_SUCCESS, FETCH_PROGRESS_FAILURE } from '../store/type';

const fetchProgresRequest = (progress) => ({
  type: FETCH_PROGRESS_REQUEST,
  payload: progress,
});

const fetchProgresSuccess = (progress) => ({
  type: FETCH_PROGRESS_SUCCESS,
  payload: progress,
});

const fetchProgressFailure = (progress) => ({
  type: FETCH_PROGRESS_FAILURE,
  payload: progress,

});

export { fetchProgressFailure, fetchProgresSuccess, fetchProgresRequest };
