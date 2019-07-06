import React, { Component } from 'react';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateGame = this.props.updateGame;
  }

  handleClick(e) {
    const flagged = !!e.altKey;
    this.updateGame(this.props.tile, flagged);
  }

  render() {
    const { tile } = this.props;

    let bombCnt, text, tileClass;

    if (tile.flagged) {
      tileClass = 'flagged';
      // text = '⚐';
      text = '\u2691';
    } else if (tile.bombed && tile.explored) {
      tileClass = 'bombed';
      text = '☠';
    } else if (tile.explored && !tile.bombed) {
      tileClass = 'explored';
      bombCnt = tile.adjacentBombCount();
      text = bombCnt > 0 ? `${bombCnt}` : '';
    } else {
      tileClass = 'unexplored';
    }

    return (
      <div className={`tile ${tileClass}`} onClick={this.handleClick}>
        {text}
      </div>
    );
  }
}
