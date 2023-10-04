const express = require("express");
require("dotenv").config();
const Application = require("./vindor/App/Application");
const User = require("./app/models/User");

const app = express();
Application.instance.set(app);

User.findByPk(1);

app.listen(process.env.APP_PORT, () => {
  console.log("Server Started");
});
