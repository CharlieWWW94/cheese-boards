const { Board, Cheese, User } = require("../../models/index.model");
const syncDB = require("../../db/seed.js");
const db = require("../../db/db");
describe("Check for correct relationships between Models", () => {
  beforeEach(async () => {
    //Make cheeseboards in DB
    boards = await Board.bulkCreate([
      {
        type: "Ancient",
        description: "A disaster, worst board I've ever had!",
        rating: 3,
      },
      {
        type: "Mediocre",
        description: "Fine, if you count Dairylea Dunkers as real cheese",
        rating: 4,
      },
      {
        type: "Enigmatic",
        description:
          "A Tour De Force, the best selection I've personally come across",
        rating: 9,
      },
    ]);

    //Make user in DB;
    user = await User.create({
      name: "Waylon Smithers",
      email: "smithers@springfieldpower.com",
    });

    //Make association between user and created boards
    await user.addBoards(boards);

    //Make cheeses in db
    cheeses = await Cheese.bulkCreate([
      { title: "Gruyere", description: "Cheesey" },
      { title: "Brie", description: "Melty" },
    ]);
  });

  afterEach(async () => {
    await db.sync({ force: true });
  });

  test("User has multiple associated boards.", async () => {
    expect(await user.countBoards()).toBe(3);
  });

  test("Board has associated User", async () => {
    const obj = await (
      await Board.findOne({ where: { type: "Ancient" } })
    ).getUser();
    expect(obj["name"]).toBe("Waylon Smithers");
  });

  test("Cheese can have multiple associated boards", async () => {
    const gruyere = await Cheese.findOne({ where: { title: "Gruyere" } });
    await boards[0].addCheese(gruyere);
    await boards[1].addCheese(gruyere);
    expect(await (await gruyere.getBoards()).length).toBe(2);
  });

  test("Board can have multiple associated cheese", async () => {
    await boards[0].addCheese(cheeses[0]);
    await boards[0].addCheese(cheeses[1]);
    expect(await (await boards[0].getCheeses()).length).toBe(2);
  });
});
