import React, {useContext, useState} from "react";
import './RecipeItem.css';
import {RecipeContext} from "../contexts/RecipeContext";
import { fetchRecipe} from "../services/apis";



const RecipeItem = props => 
{
  const context = useContext(RecipeContext);
  
  const OnRecipeSelect = async meal => 
  {
    const response = await fetchRecipe(meal.idMeal);
    const mealDetails = response.meals[0];
    context.setSelectedMeal(mealDetails);
    context.setModalOpen(true);
  };

  return (
    
    <div onClick={() => { OnRecipeSelect(props.meal) }} className="item recipe-item" >
      <img
        className="ui rounded image"
        src={ props.meal.strMealThumb}
       />
      <div className="content">
        <div className="header">{props.meal.strMeal}</div>
      </div>
    </div>
  );
};

export default RecipeItem;
