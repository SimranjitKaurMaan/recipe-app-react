import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props =>
{

    return ReactDOM.createPortal(
        <div onClick={() => window.location.href = 'http://localhost:3001/'} className="ui dimmer modals visible active">
            <div onClick = {e => e.stopPropagation()}className="ui standard modal visible active">
             <div className="header">Recipe</div>
             <div className="content">
                 this is meal content
             </div>
             
            </div>
        </div>,
        document.querySelector('#modal')
    );

};

export default Modal;