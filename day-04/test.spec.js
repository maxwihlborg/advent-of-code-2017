import { assert } from "chai";
import { one, two } from "./index";

describe("day 4", () => {
  describe("part 1", () => {
    it("test 1", () => {
      assert(one("aa bb cc dd ee") == 1);
    });
    it("test 2", () => {
      assert(one("aa bb cc dd aa") === 0);
    });
    it("test 3", () => {
      assert(one("aa bb cc dd aaa") === 1);
    });
  });
  describe("part 2", () => {
    it("test 1", () => {
      assert(two("abcde fghij") == 1);
    });
    it("test 2", () => {
      assert(two("abcde xyz ecdab") === 0);
    });
    it("test 3", () => {
      assert(two("a ab abc abd abf abj") === 1);
    });
    it("test 4", () => {
      assert(two("iiii oiii ooii oooi oooo") === 1);
    });
    it("test 5", () => {
      assert(two("oiii ioii iioi iiio") === 0);
    });
  });
});
