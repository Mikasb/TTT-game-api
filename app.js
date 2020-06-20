const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const Logs = require("./models/Logs");

app.use(express.json());

let logContainer = [];

/**
 * POST has an instant response to provide
 * live activity log.
 */
app.post("/api", (req, res) => {
  if(!req.body.board.includes('O')){
    logContainer = [];
  }
  logContainer.push(new Logs(req.body.board, req.body.winner, new Date().toLocaleTimeString()))
  console.log(req.body.board);
  console.log(req.body.winner);
  res.send({
    moves: req.body.board,
    winner: req.body.winner,
    time: new Date().toLocaleTimeString(),
  });
});

/**
 * To get full session log in one place.
 */
app.get('/api', (req, res) => {
  res.send(logContainer)
})

app.listen(port, (err) => {
  if (err) {
    console.log("Error connecting to the server.", err);
  }
});