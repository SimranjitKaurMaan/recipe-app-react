import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import RecipeDetailModal from './components/recipe/RecipeDetailModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="recipes" />
       
        <Route  path="/recipes" component={App} />
        <Route  path="/recipes/:id" component={RecipeDetailModal}/>
       
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
