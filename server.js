// Express
const express = require("express");
const app = express();

// Dotenv
const dotenv = require("dotenv");
dotenv.config();

// Debugger
// const debug = require('debug')('server.js');

// app.use((req, res, next) => {
//   debug('Request:', req.method, req.url);
//   next();
// });


// Controllers
const dashBoardController = require("./controllers/dashboard");
const postConstroller = require("./controllers/posts");

// Public folder
app.use(express.static("public"));


// Routes
app.get("/", dashBoardController.index);
app.get("/posts", postConstroller.posts);




// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });