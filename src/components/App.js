import React from "react";
import RecipeList from "./RecipeList";
import Modal from "./RecipeDetailModal";
import { RecipeContextProvider } from "../contexts/RecipeContext";



const App = () => {
   
  return (
    <div className="ui container">
      <h1>Recipes App</h1>
      <RecipeContextProvider>
        <RecipeList/>
        <Modal/>
      </RecipeContextProvider>
    </div>
  );
};

export default App;
