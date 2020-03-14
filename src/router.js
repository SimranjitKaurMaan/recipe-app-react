import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Modal from './components/recipe/Modal';
import history from './history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="recipes" />
        <Route  path="/recipes/:id" component={Modal}/>
        <Route  path="/recipes" component={App} />
      </Switch>
    </Router>
  );
};

export default Routes;
