/* eslint-disable consistent-return */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProgress } from '../action/Progress';
import Navigation from '../component/footer';
import panel from '../style/panel.module.css';
import displayImage from './displayImage';

const Panel = () => {
  const dispatch = useDispatch();
  const category = ['Left-bicep', 'Right-bicep', 'Waist', 'Hips', 'Left-thigh', 'Right-thigh'];

  return (
    <div>
      <div className={panel.panel}>
        {category.map((cat, ids) => (
          <div key={cat}>

            <Link to={`progress/${cat}`} onClick={() => dispatch(fetchProgress(ids + 1))} key={cat}>
              <div className={panel.cat}>
                {displayImage(ids)}
                <p className="cat-title">
                  {' '}
                  {cat}
                  {' '}
                </p>
              </div>

            </Link>
          </div>
        ))}

      </div>
      <Navigation />
    </div>

  );
};

export default (Panel);
