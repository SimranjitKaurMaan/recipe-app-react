import React,{useContext} from "react";
import history from '../../history';
import ReactDOM from "react-dom";
import {RecipeContext} from "../../contexts/RecipeContext";

const Modal = () => {
  const context = useContext(RecipeContext);
  
  if (context.selectedMeal == null) return null;

  return ReactDOM.createPortal(
    <div
      onClick={() => {
        context.setSelectedMeal(null);
        history.push("/recipes"); 
      }
    }
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
          <img className="ui image medium" src={context.selectedMeal.strMealThumb} alt="" />
        </div>
        <div className="header">{context.selectedMeal.strMeal}</div>
        <div className="header">Instructions</div>
        <div className="content">{context.selectedMeal.strInstructions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
