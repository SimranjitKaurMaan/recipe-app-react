import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import Modal from "./Modal";
import {fetchRecipes,fetchRecipe} from "../services/apis";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    setRecipes();
  }, []);

  const setRecipes = async () => {
   const response = await fetchRecipes().then(response => response).then(data => data);
   //console.log("inside set recipes",response)
    setMeals(response.meals);
    setSelectedMeal(null);
    OnRecipeSelect(response.meals[0]);
  };

  const OnRecipeSelect = async meal => {
    const response = await fetchRecipe(meal.idMeal);
    const mealDetails = response.meals[0];
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="ui container">
      <h1>Recipes App</h1>
      <RecipeDetail meal={selectedMeal} />
      <RecipeList meals={meals} OnRecipeSelect={OnRecipeSelect} />
      {/* <Modal /> */}
    </div>
  );
};

export default App;
