const express = require("express");
const app = express();

const useRoute = require("./route");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(useRoute);
// app.use((req, res) => {
//   res.send("ohhhhhh. you lost!");
// });
module.exports = { app };
