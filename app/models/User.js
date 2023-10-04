const { DataTypes } = require("sequelize");
const Application = require("../../vindor/App/Application");

const User = Application.instance.database.define("user", {
  id: {
    type: DataTypes.BIGINT({ unsigned: true }),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = User;
