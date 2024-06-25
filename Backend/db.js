const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/spartansHotel")
  .then((response) => {
    console.log("Connected to Datebase");
  })
  .catch((error) => {
    console.log(error);
  });
