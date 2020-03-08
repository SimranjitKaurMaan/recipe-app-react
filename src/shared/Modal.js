import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  if (props.meal == null) return <div>Loading...</div>;

  var ingredients = [];
  var measures = [];
  Object.keys(props.meal).forEach(function(key) {
    if (key.includes("strIngredient") && props.meal[key] != "")
      ingredients.push(props.meal[key]);

    if (key.includes("strMeasure") && props.meal[key] != "")
      measures.push(props.meal[key]);
  });

  return ReactDOM.createPortal(
    <div
      onClick={() => {
        props.onDismiss();
      }}
      className={
        "ui page modals dimmer top aligned visible " +
        (props.show ? "active" : "hidden")
      }
    >
      <div
        onClick={e => e.stopPropagation()}
        className={
          "ui special modal transition visible " +
          (props.show ? "active" : "hidden")
        }
      >
        <div class="image content">
          <img class="ui image medium" src={props.meal.strMealThumb} />
        </div>
        <div className="header">{props.meal.strMeal}</div>
        <h4 class="header">Instructions</h4>
        <div className="content">{props.meal.strInstructions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
