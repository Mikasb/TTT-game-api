const express = require("express");
const app = express();
const logRouter = require('./routes/logRouter');
const port = process.env.PORT || 3000;

app.use(express.json());

// Middleware to handle routes to /api end-point.
app.use('/api', logRouter);


app.listen(port, (err) => {
  if (err) {
    console.log("Error while launching server", err);
  } else {
    console.log("Server started successfully.");
  }
});

module.exports = app;