/* eslint-disable consistent-return */
import leftBicep from '../Assets/bicep-left.png';
import rightBicep from '../Assets/bicep-right.png';
import hips from '../Assets/hip.png';
import waist from '../Assets/waist.png';
import leftThigh from '../Assets/leg-left.png';
import rightThigh from '../Assets/leg-right.png';

const displayImage = (id) => {
  if (id === 0) {
    return (
      <img src={leftBicep} alt="left-biceps" />
    );
  }
  if (id === 1) {
    return (
      <img src={rightBicep} alt="right-biceps" />
    );
  }
  if (id === 2) {
    return (
      <img src={waist} alt="waist" />
    );
  }
  if (id === 3) {
    return (
      <img src={hips} alt="hips" />
    );
  }
  if (id === 4) {
    return (
      <img src={leftThigh} alt="left-thigh" />
    );
  }
  if (id === 5) {
    return (
      <img src={rightThigh} alt="right-thigh" />
    );
  }
};
export default displayImage;
