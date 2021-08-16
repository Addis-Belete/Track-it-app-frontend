import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProgress } from '../action/Progress';
import Navigation from '../component/footer';
import panel from '../style/panel.module.css';

const Panel = () => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(fetchProgress(id));
  };

  return (
    <div>
      <div className={panel.panel}>
        <Link onClick={clickHandler(1)} to="/progress/1"><div className={panel.cat}>Left bicep</div></Link>
        <Link onClick={clickHandler(2)} to="/progress/2"><div className={panel.cat}>Right bicep</div></Link>
        <Link onClick={clickHandler(3)} to="/progress/3"><div className={panel.cat}>Hips</div></Link>
        <Link onClick={clickHandler(4)} to="/progress/4"><div className={panel.cat}>Waist</div></Link>
        <Link onClick={clickHandler(5)} to="/progress/5"><div className={panel.cat}>Left thigh</div></Link>
        <Link onClick={clickHandler(6)} to="/progress/6"><div className={panel.cat}>Right thigh</div></Link>
      </div>
      <Navigation />
    </div>

  );
};

export default (Panel);
