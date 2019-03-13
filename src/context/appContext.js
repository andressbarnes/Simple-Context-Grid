import React from 'react';

export default React.createContext({
  colors: [],
  selected: '',
  updateSelectedPickerColor: id => {},
  updateSelectedBoxColor: id => {},
  gridColors: []
});
