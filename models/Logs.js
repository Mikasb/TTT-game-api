class Logs {
  _moves = Array(9).fill("");
  _winner = "";

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
