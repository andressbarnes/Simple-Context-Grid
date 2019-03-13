import React, { Component } from 'react';
import AppContext from './appContext';

class GlobalSate extends Component {
  state = {
    colors: ['color0', 'color1', 'color2', 'color3', 'color4'],
    selected: 1,
    gridColors: [
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ],
      [
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0',
        'color0'
      ]
    ]
  };

  updateSelectedPickerColor = id => {
    this.setState({ selected: id });
  };

  updateSelectedBoxColor = (row, rowID) => {
    const newColors = this.state.gridColors;
    newColors[row][rowID] = this.state.colors[this.state.selected];
    this.setState({ gridColors: newColors });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          colors: this.state.colors,
          selected: this.state.selected,
          gridColors: this.state.gridColors,
          updateSelectedPickerColor: this.updateSelectedPickerColor,
          updateSelectedBoxColor: this.updateSelectedBoxColor
        }}
      >
        {this.props.children};
      </AppContext.Provider>
    );
  }
}

export default GlobalSate;
