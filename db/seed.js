const { Sequelize, Model, DataTypes } = require("sequelize");
const { Board, Cheese, User } = require("../models/index.model");
cheeseInfo = require("../static/cheeses.json");
const db = require("../db/db");

async function seedDB() {
  await db.sync({ force: true });
}

seedDB();
