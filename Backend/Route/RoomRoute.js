const express = require("express");
const router = express.Router();
const RoomtypeModal = require("../Model/Roomtype");

router.get("/getRoomTypes", async (req, res) => {
  const result = await RoomtypeModal.find();
  res.send(result);
});
router.post("/createRoomType", async (req, res) => {
  const result = await RoomtypeModal.create({ name: req.body.name });
  res.send(result);
});
module.exports = router;
