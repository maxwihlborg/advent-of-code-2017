import { assert } from "chai";
import { one, two } from "./index";

const data = [0, 3, 0, 1, -3].join("\n");

describe("day 5", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one(data), 5));
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(two(data), 10));
  });
});
