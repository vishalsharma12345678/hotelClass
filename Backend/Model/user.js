const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    trim: true,
    required: true,
  },
  mobileNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  reponsibilities: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
