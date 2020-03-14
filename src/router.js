import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import RecipeDetailModal from './components/recipe/RecipeDetailModal';
import history from './history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="recipes" />
        <Route  path="/recipes" component={App} />
        <Route  path="/recipes/:id" component={RecipeDetailModal}/>
       
      </Switch>
    </Router>
  );
};

export default Routes;
