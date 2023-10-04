const express = require("express");
const CategoryController = require("../app/controllers/CategoryController");
const webRoutes = express.Router();

webRoutes.get("/category", CategoryController.instance.index);

module.exports = webRoutes;
