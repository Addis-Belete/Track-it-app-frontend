import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMeasurement from './AddMeasurment';
import App from './App';
import Login from './Login';
import Progress from './Progress';
import NavBar from './NavBar';
import Panel from '../container/Panel';
import AllProgress from './AllProgress';
import Navigation from './footer';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={App} />
      <Route exact path="/progress/:id" component={Progress} />
      <Route exact path="/addMeasurment" component={AddMeasurement} />
      <Route exact path="/track" component={Panel} />
      <Route exact path="/allProgress" component={AllProgress} />
    </Switch>
    <Navigation />
  </BrowserRouter>
);

export default Routes;
