const Board = require("../../models/board.model");
const db = require("../../db/db");

describe("Test Board model for proper properties", () => {
  beforeEach(async () => {
    cheeseBoard = await Board.create({
      type: "French",
      description:
        "A lively collection of stinkers that will make your fridge wish it was never born",
      rating: 9,
    });
  });

  afterEach(async () => {
    // await (await Board.findOne({ where: { type: "French" } })).destroy();
    await db.sync({ force: true });
  });

  test("Board has a type", async () => {
    expect(cheeseBoard.type).toBe("French");
  });

  test("Board has description", () => {
    expect(cheeseBoard.description).toBe(
      "A lively collection of stinkers that will make your fridge wish it was never born"
    );
  });

  test("Board has rating", () => {
    expect(cheeseBoard.rating).toBe(9);
  });
});
