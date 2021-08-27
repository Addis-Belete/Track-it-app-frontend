/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProgress } from '../action/Progress';
import Navigation from './footer';
import Add from '../style/addMeasurment.module.css';

const AddMeasurement = () => {
  const [prog, setProg] = useState({
    id: 1,
    result: '',

  });
  const dispatch = useDispatch();

  const createPost = (e) => {
    if (prog.id === '' || prog.result === '') {
      alert('Please add information');
    } else {
      dispatch(addProgress(prog));
      setProg({
        id: 1,
        result: '',

      });
      alert('Measurment successfully addedl');
    }
    e.preventDefault();
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
      <form className={Add.form}>
        <select name="id" id="cat" onChange={handleChange} value={id} className={Add.select}>
          {category.map((cat, id) => (
            <option value={id + 1} key={cat}>{cat}</option>
          ))}

        </select>
        <input
          name="result"
          type="number"
          step="0.1"
          min="0"
          max="100"
          onChange={handleChange}
          value={result}
          className={Add.input}
          placeholder="0.01CM"
        />
        <button type="submit" onClick={createPost} className={Add.button}>Add Measurment</button>

      </form>
      <Navigation />
    </div>
  );
};
export default AddMeasurement;
