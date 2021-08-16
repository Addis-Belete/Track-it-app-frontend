/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import addProgress from '../action/AddProgress';

const AddMeasurement = () => {
  const [id, setId] = useState(null);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();

  const createPost = (results) => {
    useEffect(() => (
      dispatch(addProgress(results))

    ));
  };

  const category = ['Left bicep', 'Right bicep', 'Waist', 'Hips', 'Left thigh', 'Right thigh'];

  return (
    <div>
      <form>
        <select name="cat" id="cat" onChange={(e) => setId(e.target.value)}>
          {category.map((cat, id) => (
            <option value={id + 1} key={cat}>{cat}</option>
          ))}

        </select>
        <input type="number" step="0.1" min="0" max="100" onChange={(e) => setResult(e.target.value)} value={result} />
        <button type="button" onClick={createPost(result)}>Add Measurment</button>

      </form>
    </div>
  );
};
export default AddMeasurement;
