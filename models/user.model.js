const { Sequelize, Model, DataTypes } = require("sequelize");

class User extends Model {}
User.init(
  {
    name: { type: DataTypes.TEXT },
    email: { type: DataTypes.TEXT },
  },
  { sequelize: db }
);

module.exports = User;
