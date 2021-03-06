/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './footer';
import Prog from '../style/Progress.module.css';

const Progress = () => {
  const progress = useSelector((state) => state.progress.progress);
  const remove = (str) => {
    const newStr = `${str}`;
    return newStr.slice(0, 10);
  };
  return (
    <div className={Prog.progComp}>
      {progress.map((prog) => (
        <div key={prog.id} className={Prog.progress}>
          <p className={Prog.p}>{prog.result}</p>
          <p className={Prog.p}>{remove(prog.created_at)}</p>
        </div>
      ))}
      <Navigation />
    </div>
  );
};
export default Progress;
