/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import addProgress from '../action/AddProgress';
import Navigation from './footer';

const AddMeasurement = () => {
  const [prog, setProg] = useState({
    id: '',
    result: '',

  });
  const dispatch = useDispatch();

  const createPost = () => {
    dispatch(addProgress(prog));
    setProg({
      id: '',
      result: '',

    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProg({
      ...prog,
      [name]: value,

    });
  };
  const category = ['Left bicep', 'Right bicep', 'Waist', 'Hips', 'Left thigh', 'Right thigh'];
  const { id, result } = prog;
  return (
    <div>
      <form>
        <select name="id" id="cat" onChange={handleChange} value={id}>
          {category.map((cat, id) => (
            <option value={id + 1} key={cat}>{cat}</option>
          ))}

        </select>
        <input name="result" type="number" step="0.1" min="0" max="100" onChange={handleChange} value={result} />
        <button type="submit" onClick={createPost}>Add Measurment</button>

      </form>
      <Navigation />
    </div>
  );
};
export default AddMeasurement;
