const express = require("express");
const CategoryController = require("../app/controllers/CategoryController");
const apiRouter = express.Router();

apiRouter.get("/", CategoryController.instance.index);
apiRouter.get("/category", CategoryController.instance.create);

module.exports = apiRouter;
