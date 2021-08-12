import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './component/Route';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
