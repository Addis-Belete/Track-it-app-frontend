import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/addMeasurment">Add</Link>
    <Link to="/track">Track</Link>
    <Link to="/Progress">Progress</Link>
    <Link to="/">Logout</Link>
  </div>
);

export default Navigation;
