import { assert } from "chai";
import { one, two } from "./index";

const data = `
pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)
`;

describe("day 7", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one(data), "tknk"));
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(two(data), 60));
  });
});
