import React, {useContext} from "react";
import './RecipeItem.css';
import {RecipeContext} from "../contexts/RecipeContext";


const RecipeItem = props => {
  const context = useContext(RecipeContext);
  console.log("inside recipe item",props.meal)
  console.log(context)
  return (
    
    <div onClick={() => { context.OnRecipeSelect(props.meal)}} className="item recipe-item" >
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
