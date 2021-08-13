/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchProgress from '../action/Progress';

const Panel = () => {
  const dispatch = useDispatch;
  const clickHandler = (id) => {
    dispatch(fetchProgress(id));
  };

  return (
    <div>
      <Link>Left bicep</Link>
      <Link>Right bicep</Link>
      <Link>Waist</Link>
      <Link>Hips</Link>
      <Link>Left thigh</Link>
      <Link>Right thigh</Link>

    </div>

  );
};
export default connect()(Panel);
