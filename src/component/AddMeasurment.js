import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addProgress from '../action/AddProgress';

const AddMeasurement = () => {
  const [prog, setProg] = useState({
    id: null,
    result: null,
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setProg({
      ...prog,
      [name]: value,
    });
  };
  const createPost = () => {

  };

  const category = ['Left bicep', 'Right bicep', 'Waist', 'Hips', 'Left thigh', 'Right thigh'];
  return (
    <div>
      <select name="cat" id="cat">
        {category.map((cat, id) => (
          <option value={id + 1} key={cat} onChange={(e) => setId(e.target.value)}>{cat}</option>
        ))}

      </select>
      <input type="number" step="0.1" min="0" max="100" onChange={(e) => setResult(e.target.value)} />
      <button type="submit" onClick={createPost()}>Add Measurment</button>

    </div>

  );
};
export default AddMeasurement;
