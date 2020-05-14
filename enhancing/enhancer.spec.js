const enhancer = require("./enhancer.js");
// test away!
test("running test sequence", () => {
  expect(1 + 1).toBe(2);
});

// items have name, durability, and ehancement
// enhacement: number from 0-20
// durability: number from 0-100
describe("get functions", () => {
  it("checks items info", () => {
    const item = { name: "USER", enhancement: 10, durability: 10 };
    expect(enhancer.get(item)).toEqual(item);
  });
});

describe("enhancer unit test", () => {
  it("if ehancement succeed, 1+", () => {
    const expected = { name: "user", enhancement: 15, durability: 50 };
    const item = { name: "user", enhancement: 15, durability: 50 };

    expect(enhancer.succeed(item)).toEqual(expected);
  });

  it("if enhancement is 20, no changes", () => {
    // const expected = { name: "user", enhancement: 20, durability: 80 };
    const item = { name: "user", enhancement: 20, durability: 80 };

    expect(enhancer.succeed(item)).toEqual(item);
  });
});

describe("fail functions", () => {
  it("item's enhancement less than 15, decrease durability by 5", () => {
    const item = { name: "user", enhancement: 1, durability: 5 };
    const expected = { name: "user", enhancement: 1, durability: 0 };

    expect(enhancer.fail(item)).toEqual(expected);
  });

  it("item's enhancement is 15 or more, durability decresed by 10", () => {
    const item = { name: "user", enhancement: 15, durability: 20 };
    const expected = { name: "user", enhancement: 15, durability: 10 };

    expect(enhancer.fail(item)).toEqual(expected);
  });

  it("item's enhancement level is greater than 16, enhancement level decreases by 1", () => {
    const item = { name: "user", enhancement: 15, durability: 20 };
    const expected = { name: "user", enhancement: 15, durability: 10 };

    expect(enhancer.fail(item)).toEqual(expected);
  });
});
