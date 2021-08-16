/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './footer';

const Progress = () => {
  const progress = useSelector((state) => state.progress.progress);

  return (
    <div>
      {progress.map((prog) => (
        <div key={prog.id}>
          <p>{prog.result}</p>
          <p>{prog.created_at}</p>
        </div>
      ))}
      <Navigation />
    </div>
  );
};
export default Progress;
