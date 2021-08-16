/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProgress } from '../action/Progress';
import Navigation from '../component/footer';
import panel from '../style/panel.module.css';

const Panel = () => {
  const dispatch = useDispatch();
  const category = ['Left-bicep', 'Right-bicep', 'Waist', 'Hips', 'Left-thigh', 'Right-thigh'];
  return (
    <div>
      <div className={panel.panel}>
        {category.map((cat, ids) => (
          <div key={cat}>

            <Link to={`progress/${cat}`} onClick={() => dispatch(fetchProgress(ids + 1))} key={cat}><div className={panel.cat}>{cat}</div></Link>
          </div>
        ))}

      </div>
      <Navigation />
    </div>

  );
};

export default (Panel);
