import { assert } from "chai";
import { one, two } from "./index.js";

describe("day 1", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one(1122), 3));
    it("test 2", () => assert.equal(one(1111), 4));
    it("test 3", () => assert.equal(one(1234), 0));
    it("test 4", () => assert.equal(one(91212129), 9));
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(two(1212), 6));
    it("test 2", () => assert.equal(two(1221), 0));
    it("test 3", () => assert.equal(two(123425), 4));
    it("test 4", () => assert.equal(two(123123), 12));
    it("test 5", () => assert.equal(two(12131415), 4));
  });
});
