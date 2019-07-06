import React, { Component } from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(10, 10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    flagged === true ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  restartGame() {
    const board = new Minesweeper.Board(10, 10);
    this.setState({ board });
  }

  render() {
    let text, modalType;
    if (this.state.board.won()) {
      modalType = 'won';
      text = 'You won!';
    } else if (this.state.board.lost()) {
      modalType = 'lost';
      text = 'You lost!';
    } else {
      text = '';
    }
    return (
      <div>
        <h1>Minesweeper</h1>
        <p>{text}</p>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <div className={`modal ${modalType}`}>
          <button onClick={this.restartGame.bind(this)}>Click to play again</button>
        </div>
      </div>
    );
  }
}
