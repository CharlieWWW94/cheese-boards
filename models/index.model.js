const Board = require("./board.model");
const Cheese = require("./cheese.model");
const User = require("./user.model");

User.hasMany(Board);
Board.belongsTo(User);

Board.belongsToMany(Cheese);
Cheese.belongsToMany(Board);

module.exports = { Board, Cheese, User };
