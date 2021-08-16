/* eslint-disable no-console */
import axios from 'axios';
import { ADD_PROGRESS } from '../store/type';

export const addProgres = (progObj) => ({
  type: ADD_PROGRESS,
  payload: { progObj },

});

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
export default addProgress;
