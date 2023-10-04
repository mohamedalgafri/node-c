const Kernel = require("../../app/Kernel");
const express = require("express");
const Database = require("./Database");

class Application {
  static #instance = null;
  #database = null;
  #app = null;

  static get instance() {
    return (this.#instance ??= new Application());
  }

  get app() {
    return this.#app;
  }

  set(app) {
    this.#app = app;
    this.#setup();
  }

  get database() {
    return this.#database;
  }

  async #setup() {
    this.#database = await new Database().connect();
    // await Database.instance.connect();
    this.#defineMidlewares();
    this.#defineRoutes();
    this.#defineSettings();
  }

  #defineMidlewares() {
    this.#app.use(Kernel.global);
  }

  #defineRoutes() {
    this.#app.use("/", Kernel.web, require("../../route/web"));
    this.#app.use("/api", Kernel.api, require("../../route/api"));
  }

  #defineSettings() {
    this.#app.use(express.static("public"));
    this.#app.set("view engine", "ejs");
    this.#app.set("views", "views");
  }
}

module.exports = Application;
