import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history'; 
import App from "./App";
import Modal from './components/recipe/Modal';


const Routes = () => {

   
 const history =  createBrowserHistory();

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
