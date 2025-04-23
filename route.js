const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Who am I!");
});
router.get("/home", (req, res) => {
  res.send("Who am I!pppppp");
});
module.exports = router;
