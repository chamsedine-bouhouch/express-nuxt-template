require("dotenv").config();

const express = require("express");
// Create express instance
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Require API routes
const users = require("./routes/users");
const test = require("./routes/test");

// Import API Routes
app.use(users);
app.use(test);

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
