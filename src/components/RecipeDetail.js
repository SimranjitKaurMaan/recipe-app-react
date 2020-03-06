import React from "react";


const RecipeDetail = props => {
  if (props.meal == null) return <div>Loading...</div>;
   var ingredients = [];
   var measures =[];
   Object.keys(props.meal).forEach(function(key) 
   {
     if(key.includes('strIngredient') && props.meal[key]!="")
     ingredients.push(props.meal[key]);

     if(key.includes('strMeasure')&& props.meal[key]!="")
     measures.push(props.meal[key]);

   });


  console.log(ingredients);

  return (
    <div>
    <div class="ui inverted segment">
    <img class="ui centered medium rounded image" src={props.meal.strMealThumb}/>
    <div class="content">
    <i class="food icon" size="large"></i>
    <h1 class="header">{props.meal.strMeal}</h1>
    <div>
    <ol role="list" class="ui list">
      {ingredients.map((value, index) => {
             return (
			          <div>
			         <li role="listitem" value="*" key={index}>{value}</li>
               <ol>
			         <li role="listitem" value="-" key={index}>{measures[index]}</li>
               </ol>
					     </div>
             )					 
      })}
	  
    </ol>
    </div>
    <h2 class="header">Instructions</h2>
    <div class="description">{props.meal.strInstructions}</div>
    </div>
   </div>
   
   </div>
  );
};

 export default RecipeDetail;

