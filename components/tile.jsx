import React, { Component } from 'react';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.tile = this.props.tile;
    this.updateGame = this.props.updateGame;
  }
  tileStatus() {
    if (this.tile.flagged === true) {
      return '⚐';
    } else if (this.tile.bombed && this.tile.explored) {
      return '☠';
    } else if (this.tile.explored && !this.tile.bombed) {
      if (this.tile.adjacentBombCount() > 1) {
        return this.tile.adjacentBombCount();
      }
      return '▢';
    } else {
      return ' ';
    }
  }
  render() {
    return <div className="tile">{this.tileStatus()}</div>;
  }
}
