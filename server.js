const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();

// connect Datatbase

connectDB();
app.use(bodyParser.json());

const uri = require("./config/keys").mongoURI;

app.get("/", (req, res) => {
  res.send("API Running");
});

// mongoose
//   .connect(db)
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
