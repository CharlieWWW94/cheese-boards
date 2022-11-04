const Cheese = require("../../models/cheese.model");

describe("Test Cheese model for correct properties", () => {
  beforeEach(async () => {
    freshCheese = await Cheese.create({
      title: "Lancashire Bomb",
      description: "Round, strong, creamy",
    });
  });

  afterEach(async () => {
    await (
      await Cheese.findOne({ where: { title: "Lancashire Bomb" } })
    ).destroy();
  });

  test("Cheese has title", () => {
    expect(freshCheese.title).toBe("Lancashire Bomb");
  });

  test("Cheese has description", () => {
    expect(freshCheese.description).toBe("Round, strong, creamy");
  });
});
