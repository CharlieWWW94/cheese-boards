const { Sequelize, Model, DataTypes } = require("sequelize");

class Cheese extends Model {}
Cheese.init(
  {
    title: { type: DataTypes.TEXT, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT },
  },
  { sequelize: db }
);

module.exports = Cheese;
