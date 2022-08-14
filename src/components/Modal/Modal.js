import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const animationTiming = {
  enter: 700,
  exit: 1000,
};

const modal = (props) => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.open}
      timeout={animationTiming}
    >
      {(state) => (
        <div
          className={[
            'Modal',
            state === 'entering'
              ? 'modalOpen'
              : state === 'exiting'
              ? 'modalClosed'
              : null,
          ].join(' ')}
        >
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
