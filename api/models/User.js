const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: Number,
  avatar: String,
  bio: String,
  role: String,
});

module.exports = mongoose.model("Users", UserSchema);
