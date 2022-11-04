const User = require("../../models/user.model");

describe("Test User model properties, creation, update etc. If tests run, user creation and destruction works too.", () => {
  beforeEach(async () => {
    newUser = await User.create({
      name: "Charlie Whiteside",
      email: "Charlie@tdd.com",
    });
  });

  afterEach(async () => {
    await (
      await User.findOne({ where: { name: "Charlie Whiteside" } })
    ).destroy();
  });

  test("User has name", async () => {
    expect(newUser.name).toBe("Charlie Whiteside");
  });

  test("User has email", async () => {
    expect(newUser.email).toBe("Charlie@tdd.com");
  });

  test("User has id generated by Sequelize", () => {
    expect(typeof newUser.id).toBe("number");
  });
});
