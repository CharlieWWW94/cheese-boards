const { Sequelize, Model, DataTypes } = require("sequelize");

class Cheese extends Model {}
Cheese.init(
  {
    title: { type: DataTypes.TEXT },
    description: { type: DataTypes.TEXT },
  },
  { sequelize: db }
);

module.exports = Cheese;
