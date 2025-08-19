const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:2707/G27DB").then(() => {
  console.log("connected!");
});
app.listen(5556, () => {
  console.log("server started");
});
