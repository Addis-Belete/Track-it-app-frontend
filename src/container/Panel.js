/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProgress } from '../action/Progress';

const Panel = () => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(fetchProgress(id));
  };

  return (
    <div>
      <Link onClick={clickHandler(1)} to="/progress/1">Left bicep</Link>
      <br />
      <Link onClick={clickHandler(2)} to="/progress/2">Right bicep</Link>
      <br />
      <Link onClick={clickHandler(3)} to="/progress/3">Waist</Link>
      <br />
      <Link onClick={clickHandler(4)} to="/progress/4">Hips</Link>
      <br />
      <Link onClick={clickHandler(5)} to="/progress/5">Left thigh</Link>
      <br />
      <Link onClick={clickHandler(6)} to="/progress/6">Right thigh</Link>

    </div>

  );
};

export default (Panel);
