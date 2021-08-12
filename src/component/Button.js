import React from 'react';

const Card = ({ source, cat, value }) => (
  <div>

    <img src={source} alt="img" />
    <div>
      <p>{cat}</p>
      <p>
        {value}
        {' '}
        <span>CM</span>
      </p>

    </div>

  </div>

);
export default Card;
