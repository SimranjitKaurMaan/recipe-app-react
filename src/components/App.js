import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import Modal from "./RecipeDetailModal";
import { fetchRecipes, fetchRecipe } from "../services/apis";
import RecipeContext from "../contexts/RecipeContext";
import ErrorBoundary from "./error_boundary/ErrorBoundary";


const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setRecipes();
  }, []);

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

  const OnDismissModal = () =>
  {
    setModalOpen(false);
  };

  return (
    <div className="ui container">
      <h1>Recipes App</h1>
    
      <RecipeContext.Provider value={{ OnRecipeSelect: OnRecipeSelect }}>
        <RecipeList meals={meals} />
      </RecipeContext.Provider>
     
      <Modal meal={selectedMeal} show={modalOpen} onDismiss={OnDismissModal}/>
     
    </div>
  );
};

export default App;
