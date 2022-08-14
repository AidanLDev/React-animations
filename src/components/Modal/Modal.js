import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = (props) => {
  // const transitionState = props.transitionState;
  const cssClasses = [
    'Modal',
    transitionState === 'entering'
      ? 'modalOpen'
      : transitionState === 'exiting'
      ? 'modalClosed'
      : null,
  ];
  return (
    <Transition mountOnEnter unmountOnExit in={props.open} timeout={400}>
      {(state) => (
        <div className={cssClasses.join(' ')}>
          <h1>A Modal</h1>
          <button className='Button' onClick={props.closed}>
            Dismiss
          </button>
        </div>
      )}
    </Transition>
  );
};

export default modal;
