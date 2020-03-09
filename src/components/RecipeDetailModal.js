import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  if (props.meal == null) return <div>Loading...</div>;

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
        <div className="image content">
          <img className="ui image medium" src={props.meal.strMealThumb} />
        </div>
        <div className="header">{props.meal.strMeal}</div>
        <div className="header">Instructions</div>
        <div className="content">{props.meal.strInstructions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
