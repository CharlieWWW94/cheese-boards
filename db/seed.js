cheeseInfo = require("../static/cheeses.json");
const db = require("../db/db");

async function seedDB() {
  await db.sync({ force: true });
}

module.exports = seedDB;
