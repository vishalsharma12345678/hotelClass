const express = require("express");
const router = express.Router();
const User = require("../Model/user");
router.post("/signup", async (req, res) => {
  const {
    name,
    username,
    password,
    Address,
    mobileNumber,
    isAdmin,
    reponsibilities,
  } = req.body;
  await User.create({
    name,
    username,
    password,
    Address,
    mobileNumber,
    isAdmin,
    reponsibilities,
  }).then((response) => {
    res.send(response);
  });
});
router.post("/login", async (req, res) => {
  console.log(req.body.data);
  const { username, password } = req.body.data;
  let user = await User.findOne({ username: username });
  console.log(user);
  if (user) {
    if (user.password === password) {
      return res.send(user);
    }
  }
  return res.status(404).send({ message: "Incorrect username or password" });
});

module.exports = router;
