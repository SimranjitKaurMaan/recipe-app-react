import React,{useContext,useState, useEffect,useFetch} from "react";
import history from '../../history';
import ReactDOM from "react-dom";
import {RecipeContext} from "../../contexts/RecipeContext";
import { fetchRecipe, fetchRecipes} from "../../services/apis";

const Modal = (props) => {

  const mealId = props.match.params.id;
  const [selectedMeal, setSelectedMeal] = useState('');
  

  const getRecipe = async (mealId) =>
    {
      const response = await fetchRecipe(mealId);
      const mealDetails = response.meals[0];
      console.log(mealDetails)
      setSelectedMeal(mealDetails);
    }

  useEffect(() => {
    getRecipe(mealId);
  },[]);

  return ReactDOM.createPortal(
    <div
      className={
        "ui page modals dimmer top aligned visible active"
      }
    >
      <div
        onClick={e => e.stopPropagation()}
        className={
          "ui special modal transition visible active "
        }
      >
        <div className="image content">
          <img className="ui image medium" src={selectedMeal.strMealThumb} alt="" />
        </div>
        <div className="header">{selectedMeal.strMeal}</div>
        <div className="header">Instructions</div>
        <div className="content">{selectedMeal.strInstructions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
