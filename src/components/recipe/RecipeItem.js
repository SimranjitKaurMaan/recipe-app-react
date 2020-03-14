import React from "react";
import {Link} from 'react-router-dom';
import './styles/RecipeItem.css';


const RecipeItem = props => 
{ 
  return (
    
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
