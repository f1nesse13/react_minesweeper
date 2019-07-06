import React, { Component } from 'react';
import Tile from './tile';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { board, updateGame } = this.props;
    const gameBoard = board.grid.map((row, i) => {
      return (
        <div data-row={i} key={i}>
          {row.map((tile, j) => {
            return <Tile key={j} tile={tile} updateGame={updateGame} />;
          })}
        </div>
      );
    });
    return <div>{gameBoard}</div>;
  }
}
