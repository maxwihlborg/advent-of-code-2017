import { assert } from "chai";
import { one, two } from "./index";

const data = `
b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
`;

describe("day 8", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one(data), 1));
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(two(data), 10));
  });
});
