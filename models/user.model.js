const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db/db");

class User extends Model {}
User.init(
  {
    name: { type: DataTypes.TEXT },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
  },
  { sequelize: db }
);

module.exports = User;
