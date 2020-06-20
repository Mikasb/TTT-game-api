class Logs {
  constructor(moves, winner, time) {
    this._moves = moves;
    this._winner = winner;
    this._time = time;
  }

  get moves() {
    return this._moves;
  }

  set moves(arr) {
    this._moves = arr;
  }

  get winner() {
    return this._winner;
  }

  set winner(winnerString) {
    this._winner = winnerString;
  }
}

module.exports = Logs;
