const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoomTypeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

const Roomtype = mongoose.model("Roomtype", RoomTypeSchema);
module.exports = Roomtype;
