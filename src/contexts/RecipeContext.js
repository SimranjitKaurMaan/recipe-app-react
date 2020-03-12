import React, { createContext, useState } from "react";
import { fetchRecipes } from "../services/apis";

export const RecipeContext = createContext();

export const RecipeContextProvider = props => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const setRecipes = async () => {
    const response = await fetchRecipes();
    setMeals(response.meals);
  };

  
  return ( 
    <RecipeContext.Provider
      value={{
        meals,
        setRecipes, 
        selectedMeal,
        setSelectedMeal
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
