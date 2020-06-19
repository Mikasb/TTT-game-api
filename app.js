const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const Logs = require("./models/Logs");

app.use(express.json());

const logContainer = new Logs();

app.post("/api", (req, res) => {
  logContainer.moves = req.body.board;
  logContainer.winner = req.body.winner;
  console.log(logContainer.moves);
  console.log(logContainer.winner);
  res.send({
    moves: logContainer.moves,
    winner: logContainer.winner,
    time: new Date().toLocaleTimeString(),
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error connecting to the server.", err);
  }
});
