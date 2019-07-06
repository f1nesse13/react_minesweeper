import React, { Component } from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(10, 10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {}

  render() {
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}
