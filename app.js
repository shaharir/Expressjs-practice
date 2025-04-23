const express = require("express");
const app = express();
const PORT = 3000;
const useRoute = require("./route");
app.use("/api/user", useRoute);
app.use((req, res) => {
  res.send("ohhhhhh. you lost!");
});
module.exports = { app, PORT };
