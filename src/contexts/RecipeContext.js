import React, { createContext, useState } from "react";
import { fetchRecipes, fetchRecipe } from "../services/apis";

export const RecipeContext = createContext();

export const RecipeContextProvider = props => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const setRecipes = async () => {
    const response = await fetchRecipes();
    setMeals(response.meals);
    setSelectedMeal(response.meals[0]);
  };

  const OnRecipeSelect = async meal => {
    const response = await fetchRecipe(meal.idMeal);
    const mealDetails = response.meals[0];
    setSelectedMeal(mealDetails);
    setModalOpen(true);
  };

  const OnDismissModal = () => {
    setModalOpen(false);
  };

  return ( 
    <RecipeContext.Provider
      value={{
        meals,
        selectedMeal,
        modalOpen,
        setRecipes,
        OnRecipeSelect,
        OnDismissModal
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
