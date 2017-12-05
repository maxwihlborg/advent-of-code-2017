import { assert } from "chai";
import { one, two } from "./index";

describe("day 3", () => {
  describe("part 1", () => {
    it("test 1", () => {
      assert.equal(one(1), 0);
    });
    it("test 2", () => {
      assert.equal(one(12), 3);
    });
    it("test 3", () => {
      assert.equal(one(23), 2);
    });
    it("test 4", () => {
      assert.equal(one(1024), 31);
    });
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(two(2), 4));
    it("test 2", () => assert.equal(two(26), 54));
    it("test 3", () => assert.equal(two(747), 806));
  });
});
