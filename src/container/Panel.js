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

      <Link onClick={clickHandler(1)} to="/progress/1"><div>Left bicep</div></Link>
      <Link onClick={clickHandler(2)} to="/progress/2"><div>Right bicep</div></Link>
      <Link onClick={clickHandler(3)} to="/progress/3"><div>Hips</div></Link>
      <Link onClick={clickHandler(4)} to="/progress/4"><div>Waist</div></Link>
      <Link onClick={clickHandler(5)} to="/progress/5"><div>Left thigh</div></Link>
      <Link onClick={clickHandler(6)} to="/progress/6"><div>Right thigh</div></Link>
    </div>

  );
};

export default (Panel);
