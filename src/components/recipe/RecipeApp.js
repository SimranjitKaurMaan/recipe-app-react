import React, { useState, useEffect,useContext } from "react";
import RecipeList from "./RecipeList";
import RecipeModal from "./RecipeDetailModal";
import {RecipeContextProvider } from "../../contexts/RecipeContext";

const RecipeApp = () => {
  
  return (
    <div>
      <RecipeContextProvider>
        <RecipeList/>
        <RecipeModal />
      </RecipeContextProvider>
    </div>
  );
};

export default RecipeApp;