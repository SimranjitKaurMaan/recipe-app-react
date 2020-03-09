import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import Modal from "../shared/Modal";
import { fetchRecipes, fetchRecipe } from "../services/apis";
import RecipeContext from "../contexts/RecipeContext";

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
    //OnRecipeSelect(response.meals[0]);
  };

  const OnRecipeSelect = async meal => {
    console.log("from app",meal)
    const response = await fetchRecipe(meal.idMeal);
    const mealDetails = response.meals[0];
    console.log(mealDetails);
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
