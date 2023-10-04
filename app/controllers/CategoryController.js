const Controller = require("./controller");
const User = require("../models/User");

class CategoryController extends Controller {
  constructor() {
    super();
  }

  static #instance = null;
  static get instance() {
    return (this.#instance ??= new CategoryController());
  }

  index(req, res) {
    res.render("welcome");
  }

  show(req, res) {}
  create(req, res) {
    res.send("<h1>Category create</h1>");
  }

  store(req, res) {}

  edit(req, res) {}

  update(req, res) {}

  distory(req, res) {}
}

module.exports = CategoryController;
