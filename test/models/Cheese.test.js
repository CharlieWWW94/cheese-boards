const Cheese = require("../../models/cheese.model");
const db = require("../../db/db");
describe("Test Cheese model for correct properties", () => {
  beforeEach(async () => {
    freshCheese = await Cheese.create({
      title: "Lancashire Bomb",
      description: "Round, strong, creamy",
    });
  });

  afterEach(async () => {
    await db.sync({ force: true });
  });

  test("Cheese has title", () => {
    expect(freshCheese.title).toBe("Lancashire Bomb");
  });

  test("Cheese has description", () => {
    expect(freshCheese.description).toBe("Round, strong, creamy");
  });
});
