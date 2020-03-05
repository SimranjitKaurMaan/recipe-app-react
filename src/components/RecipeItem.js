import React from "react";
import './RecipeItem.css';


const RecipeItem = props => {
  return (
    <div onClick={() => { props.OnRecipeSelect(props.meal)}} className="item recipe-item">
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
