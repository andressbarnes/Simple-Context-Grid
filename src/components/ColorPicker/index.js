import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';
import AppContext from '../../context/appContext';

class index extends Component {
  static contextType = AppContext;

  renderPickers = () => {
    let pickers = [];
    for (let i = 0; i < this.context.colors.length; i++) {
      pickers.push(
        <BDiv
          key={i}
          className={`swatch ${this.context.colors[i]} ${this.isSelected(i)}`}
          style={{ backgroundColor: this.context.colors[i] }}
          onClick={() => this.context.updateSelectedPickerColor(i)}
        />
      );
    }
    return pickers;
  };

  isSelected = box => {
    if (this.context.selected === box) {
      return 'selected';
    } else {
      return '';
    }
  };

  render() {
    return (
      <BDiv className='swatch-container' display='flex'>
        {this.renderPickers()}
      </BDiv>
    );
  }
}

export default index;
