import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (path) => {
  if (path === '/') {
    return '';
  }
  return (
    <div>

      <Link to="/addMeasurment">Add</Link>
      <Link to="/track">Track</Link>
      <Link to="/Progress">Progress</Link>
      <Link to="/">Logout</Link>
    </div>
  );
};

export default Navigation;
