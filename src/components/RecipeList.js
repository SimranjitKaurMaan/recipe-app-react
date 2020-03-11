import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";
import {RecipeContext} from "../contexts/RecipeContext";

const RecipeList = () => {
  const context = useContext(RecipeContext);
  if(context.meals.length === 0)
    {
      context.setRecipes();
    }

  const renderedList = context.meals.map(meal => {
    return <RecipeItem meal={meal} key={meal.idMeal}/>;
  });

  return (
    <div>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default RecipeList;
