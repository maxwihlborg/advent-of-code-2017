import { assert } from "chai";
import { one, two } from "./index";

describe.only("day 6", () => {
  describe("part 1", () => {
    it("test 1", () => {
      assert.equal(one("0 2 7 0"), 5);
    });
  });
  describe("part 2", () => {
    it("test 1", () => {
      assert.equal(two("0 2 7 0"), 4);
    });
  });
});
