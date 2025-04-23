const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    name: "sumon",
    statusCode: 200,
  });
});
// Post Method
router.post("/", (req, res) => {
  const name = req.body.name;
  res.send(`Welcome ${name}`);
});
// Query params
router.get("/home", (req, res) => {
  const { id, name } = req.query;
  res.send(`Who am I!${name}${id}`);
});
// Route Params
router.get("/about/user/:id/name/:name", (req, res) => {
  const { id, name } = req.params;
  res.send(`Who am I!${id}${name}`);
});
router.get("/about", (req, res) => {
  const { id, name } = req.params;
  res.send(`Who am I!${id}${name}`);
});
module.exports = router;
