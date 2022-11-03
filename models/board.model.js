const { Sequelize, Model, DataTypes } = require("sequelize");

class Board extends Model {}
Board.init(
  {
    type: { type: DataTypes.TEXT },
    description: { type: DataTypes.TEXT },
    rating: { type: DataTypes.INTEGER },
  },
  { sequelize: db }
);

module.exports = Board;
