import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import './styles/RecipeItem.css';
import {RecipeContext} from "../../contexts/RecipeContext";
import { fetchRecipe} from "../../services/apis";
import history from '../../history';

const RecipeItem = props => 
{
  const context = useContext(RecipeContext);
  
  return (
    
    // <div onClick={() => { OnRecipeSelect(props.meal) }} className="item recipe-item" >
    <div className="item recipe-item">
      <img
        className="ui rounded image"
        src={ props.meal.strMealThumb}
        alt=""
       />
      <div className="content">
        <Link to={`recipes/${props.meal.idMeal}`}>
        <div className="header">{props.meal.strMeal}</div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
