import { assert } from "chai";
import { one, two } from "./index";

describe("day 2", () => {
  describe("part 1", () => {
    it("test 1", () => {
      const data = ["5 1 9 5", "7 5 3", "2 4 6 8"].join("\n");
      assert(one(data) == 18);
    });
  });
  describe("part 2", () => {
    it("test 1", () => {
      const data = ["5 9 2 8", "9 4 7 3", "3 8 6 5"].join("\n");
      assert(two(data) === 9);
    });
  });
});
