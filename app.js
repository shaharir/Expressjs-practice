const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const useRoute = require("./route");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api/user", useRoute);
app.use((req, res) => {
  res.send("ohhhhhh. you lost!");
});
module.exports = { app, PORT };
