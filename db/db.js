const { Sequelize } = require("sequelize");
const path = require("path");

//Create new db, only needed to be run one for data persistence.
const db = new Sequelize({
  dialect: "sqlite",
  logging: false,
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = db;
