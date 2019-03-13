import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';
import AppContext from '../../context/appContext';

export default class index extends Component {
  static contextType = AppContext;

  getBoxes(row) {
    let boxes = [];
    const boxRows = this.context.gridColors.length;
    for (let i = 0; i < boxRows; i++) {
      let boxID = row * boxRows + i;

      boxes.push(
        <div
          key={boxID}
          id={boxID}
          className={`box ${this.context.gridColors[row][i]}`}
          onClick={() => this.context.updateSelectedBoxColor(row, i)}
        />
      );
    }
    return boxes;
  }

  render() {
    const output = this.context.gridColors.map((item, index) => (
      <BDiv key={index} display='flex' flex='row'>
        {this.getBoxes(index)}
      </BDiv>
    ));

    return <div className='gridContainer'>{output}</div>;
  }
}
