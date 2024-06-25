const express = require("express");

const app = express();
const db = require("./db");
const cors = require("cors");
const bodyparse = require("body-parser");
app.use(bodyparse.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Server in Started");
});
app.use("/auth", require("./Route/auth"));
app.listen(8080, () => {
  console.log("Successfully started at 8080");
});
