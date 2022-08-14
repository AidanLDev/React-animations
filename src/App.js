import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
          className='Button'
          style={{ margin: '12px 0' }}
        >
          Toggle Block
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                background: 'purple',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

        <Modal open={this.state.modalOpen} closed={this.closeModal} />

        {this.state.modalOpen && <Backdrop modalOpen={this.state.modalOpen} />}
        <br />
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
