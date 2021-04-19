// Import dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Set up app
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

// Parse app body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve app static content from public
app.use(express.static("public"));

// Use Heroku deployed db or local db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/young-sea", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});