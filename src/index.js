import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';

import Routes from './component/Route';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
