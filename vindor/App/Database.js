const { sequelize, Sequelize } = require("sequelize");
const { databases } = require("../../config/database");
const mysql2 = require("mysql2");

class Database {
  static #database = null;
  #connectionSettings = null;
  #connection = null;

  static get instance() {
    return (this.#database ??= new Database());
  }

  get connection() {
    return this.#connection;
  }

  async connect(db = databases.default) {
    this.#connectionSettings = databases.connections[db];
    this.#connection = new Sequelize(databases.connections[db]);
    await this.#sync();
  }

  async #sync() {
    try {
      this.#connection = await this.#connection.sync();
    } catch (error) {
      if (error.original.errno == 1049) {
        this.#createDB();
      }
    }
  }

  #createDB() {
    console.log(this.#connectionSettings.database);
    const connection = mysql2.createPool({
      host: this.#connectionSettings.host,
      port: this.#connectionSettings.port,
      user: this.#connectionSettings.username,
      password: this.#connectionSettings.password,
    });
    connection.query(
      `CREATE DATABASE ${this.#connectionSettings.database}`,
      (e, w) => {
        if (e == null) {
          this.#sync();
        }
      }
    );
  }
}

module.exports = Database;
