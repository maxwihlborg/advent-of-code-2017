import { assert } from "chai";
import { one, two } from "./index";

describe("day 10", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one(5)("3, 4, 1, 5"), 12));
  });
  describe.only("part 2", () => {
    it("test 1", () =>
      assert.equal(two(""), "a2582a3a0e66e6e86e3812dcb672a272"));
    it("test 2", () =>
      assert.equal(two("AoC 2017"), "33efeb34ea91902bb2f59c9920caa6cd"));
    it("test 3", () =>
      assert.equal(two("1,2,3"), "3efbe78a8d82f29979031a4aa0b16a9d"));
    it("test 4", () =>
      assert.equal(two("1,2,4"), "63960835bcdc130f0b66d7ff4f6a5a8e"));
  });
});
