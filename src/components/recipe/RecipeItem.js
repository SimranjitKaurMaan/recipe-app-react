import React, {useContext} from "react";
import './styles/RecipeItem.css';
import {RecipeContext} from "../../contexts/RecipeContext";
import { fetchRecipe} from "../../services/apis";
import history from '../../history';

const RecipeItem = props => 
{
  const context = useContext(RecipeContext);
  
  const OnRecipeSelect = async meal => 
  {
    const response = await fetchRecipe(meal.idMeal);
    const mealDetails = response.meals[0];
    context.setSelectedMeal(mealDetails);
    history.push("/recipes/"+meal.idMeal);
  };

  return (
    
    <div onClick={() => { OnRecipeSelect(props.meal) }} className="item recipe-item" >
      <img
        className="ui rounded image"
        src={ props.meal.strMealThumb}
        alt=""
       />
      <div className="content">
        <div className="header">{props.meal.strMeal}</div>
      </div>
    </div>
  );
};

export default RecipeItem;
