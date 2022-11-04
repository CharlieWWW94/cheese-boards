const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");
const db = require("../db/db");

User.hasMany(Board);
Board.belongsTo(User);

Board.belongsToMany(Cheese, {
  through: "cheese_board",
});
Cheese.belongsToMany(Board, {
  through: "cheese_board",
});

module.exports = { Board, Cheese, User };
