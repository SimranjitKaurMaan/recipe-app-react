import React, { useState, useEffect,useContext } from "react";
import RecipeList from "./RecipeList";
import Modal from "./RecipeDetailModal";
import {RecipeContext , RecipeContextProvider } from "../contexts/RecipeContext";



const App = () => {
  // const context = useContext(RecipeContext);

  // useEffect(() => {
  //   context.setRecipes();
  // }, []);

  
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
