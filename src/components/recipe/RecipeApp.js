import React from "react";
import RecipeList from "./RecipeList";
import RecipeModal from "./Modal";
import {RecipeContextProvider } from "../../contexts/RecipeContext";

const RecipeApp = () => {
  
  return (
    <div>
      <RecipeContextProvider>
        <RecipeList/>
      </RecipeContextProvider>
    </div>
  );
};

export default RecipeApp;