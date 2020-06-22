class Logs {
  constructor(moves, winner, time) {
    this._moves = moves; //array displaying moves made by players
    this._winner = winner; //displays winner if there is one, otherwise - "none"
    this._time = time; //timestamp to display when the move was made
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
