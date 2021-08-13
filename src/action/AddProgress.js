/* eslint-disable no-console */
import axios from 'axios';
import { ADD_PROGRESS } from '../store/type';

export const addProgres = (progObj) => ({
  type: ADD_PROGRESS,
  payload: progObj,

});

const addProgress = (id, result) => (dispatch) => {
  axios.post(`https://intense-spire-98414.herokuapp.com/measurments/${id}/results`, { result })
    .then((response) => {
      const progress = response.data;
      dispatch(addProgres(progress));
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
    });
};
export default addProgress;
