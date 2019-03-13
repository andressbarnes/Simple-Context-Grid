import React, { Component } from 'react';
import BoxGrid from './components/BoxGrid';
import ColorPicker from './components/ColorPicker';
import GlobalSate from './context/globalState';
import './App.css';

class App extends Component {
  render() {
    return (
      <GlobalSate>
        <div className='App'>
          <div>
            <ColorPicker />
          </div>
          <div>
            <BoxGrid />
          </div>
        </div>
      </GlobalSate>
    );
  }
}

export default App;
