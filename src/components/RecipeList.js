import React from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.css';


const RecipeList = (props) =>
{
  const renderedList =  props.meals.map(meal =>
    {
        return <RecipeItem meal={meal} OnRecipeSelect={props.OnRecipeSelect}/>;
    });

   return (
     <div>
   <div className="ui relaxed divided list">{renderedList}</div>
   
   </div>
   );

};

export default RecipeList;