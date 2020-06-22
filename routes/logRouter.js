const express = require("express");
const logRouter = express.Router();
const Logs = require("../models/Logs");

// logContainer contains all the activities of the session
let logContainer = [];

/**
 * POST has an instant response back to the client
 * to provide live activity log. It also retrieves the
 * information of any moves made by players and stores them
 * in the logContainer by utilizing the custom Logs class.
 */
logRouter.post("/", (req, res) => {
  if (!req.body.board.includes("O")) {
    logContainer = [];
  }
  logContainer.push(
    new Logs(req.body.board, req.body.winner, new Date().toLocaleTimeString())
  );
  console.log(req.body.board);
  console.log(req.body.winner);
  res.status(200).send({
    moves: req.body.board,
    winner: req.body.winner,
    time: new Date().toLocaleTimeString(),
  });
});

/**
 * The full log is also accessible via
 * '/api' end point, which is stored in 
 * logContainer array.
 */
logRouter.get("/", (req, res) => {
  res.status(200).send(logContainer);
});

module.exports = logRouter;
