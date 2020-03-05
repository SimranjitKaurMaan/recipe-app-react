import React from "react";
import axios from 'axios';
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";


class App extends React.Component
{
    state = { meals : [] , selectedMeal : null}

    componentDidMount()
    {
     this.fetchRecipes();
    }

    fetchRecipes = async () =>
    {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
        .then(response=>response).then(data => data);
        console.log(response.data.meals);   
        this.setState({ meals : response.data.meals , selectedMeal: null });   
        this.OnRecipeSelect(response.data.meals[0]);
    }

    OnRecipeSelect = async (meal) =>
    {
      console.log('From the App!',meal);
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        .then(response=>response).then(data => data);      
        console.log(response.data.meals[0])
         
        const mealDetails = response.data.meals[0];
       this.setState({selectedMeal:mealDetails});
  
      
    };

  render()
  {
    return (
        <div className="ui container">
            <RecipeDetail meal = {this.state.selectedMeal} />
            <RecipeList meals = {this.state.meals} OnRecipeSelect={this.OnRecipeSelect}/>
        </div>
    );


  }

}

export default App;