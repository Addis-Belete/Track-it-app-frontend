import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/home" component={App} />

    </Switch>

  </BrowserRouter>
);

export default Routes;
