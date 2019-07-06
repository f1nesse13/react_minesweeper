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
    let text, showModal;
    if (this.state.board.won()) {
      showModal = 'active';
      text = 'You won!';
    } else if (this.state.board.lost()) {
      showModal = 'active';
      text = 'You lost!';
    } else {
      showModal = '';
      text = '';
    }
    return (
      <div>
        <h1>Minesweeper</h1>
        <div className="directions">
          <p>Reveal all squares that are not trapped with a bomb!</p>
          <p>Click on the squares to reveal them</p>
          <p>Holding alt while clicking will flag the square</p>
        </div>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <section className={`modal ${showModal}`}>
          <div className={`modal-content`}>
            <p>{text}</p>
            <button onClick={this.restartGame.bind(this)}>Click to play again</button>
          </div>
          <div className="modal-background"></div>
        </section>
      </div>
    );
  }
}
