import React,{useContext} from "react";
import ReactDOM from "react-dom";
import {RecipeContext} from "../../contexts/RecipeContext";

const Modal = () => {
  const context = useContext(RecipeContext);

  if (context.selectedMeal == null) return <div>Loading...</div>;

  // console.log(context.selectedMeal)

 
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        context.setModalOpen(false);
      }}
      className={
        "ui page modals dimmer top aligned visible " +
        (context.modalOpen ? "active" : "hidden")
      }
    >
      <div
        onClick={e => e.stopPropagation()}
        className={
          "ui special modal transition visible " +
          (context.modalOpen ? "active" : "hidden")
        }
      >
        <div className="image content">
          <img className="ui image medium" src={context.selectedMeal.strMealThumb} />
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
