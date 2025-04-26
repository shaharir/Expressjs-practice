const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "homepage.html"));
});
router.get("/rectangle", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "rectangle.html"));
});
router.post("/rectangle", (req, res) => {
  const name1 = req.body.number1;
  const name2 = req.body.number2;
  res.send(`Received numbers: ${Number(name1) + Number(name2)}`);
});
router.get("/circle", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "circle.html"));
});
router.post("/circle", (req, res) => {
  const name1 = req.body.input1;
  const name2 = req.body.input2;
  res.send(`Received numbers: ${Number(name1) * Number(name2)}`);
});
module.exports = router;
