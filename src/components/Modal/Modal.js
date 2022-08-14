import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 700,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.open}
      timeout={animationTiming}
      classNames={{
        enterActive: 'modalOpen',
        exitActive: 'modalClosed',
      }}
    >
      <div className='Modal'>
        <h1>A Modal</h1>
        <button className='Button' onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
