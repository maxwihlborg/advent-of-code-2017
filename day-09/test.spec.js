import { assert } from "chai";
import { one, two } from "./index";

describe("day 9", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one("{}"), 1));
    it("test 2", () => assert.equal(one("{{{}}}"), 6));
    it("test 3", () => assert.equal(one("{{},{}}"), 5));
    it("test 4", () => assert.equal(one("{{{},{},{{}}}}"), 16));
    it("test 5", () => assert.equal(one("{<a>,<a>,<a>,<a>}"), 1));
    it("test 6", () => assert.equal(one("{{<ab>},{<ab>},{<ab>},{<ab>}}"), 9));
    it("test 7", () => assert.equal(one("{{<!!>},{<!!>},{<!!>},{<!!>}}"), 9));
    it("test 8", () => assert.equal(one("{{<a!>},{<a!>},{<a!>},{<ab>}}"), 3));
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(two("<>"), 0));
    it("test 2", () => assert.equal(two("<random characters>"), 17));
    it("test 3", () => assert.equal(two("<<<<>"), 3));
    it("test 4", () => assert.equal(two("<{!>}>"), 2));
    it("test 5", () => assert.equal(two("<!!>"), 0));
    it("test 6", () => assert.equal(two("<!!!>>"), 0));
    it("test 7", () => assert.equal(two('<{o"i!a,<{i<a>'), 10));
  });
});
