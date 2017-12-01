import { assert } from "chai";
import run from "./index.js";

const half = a => (a.length / 2) | 0;

describe("day 1", () => {
  describe("part 1", () => {
    it("test 1", () => assert(run(1122) === 3));
    it("test 2", () => assert(run(1111) === 4));
    it("test 3", () => assert(run(1234) === 0));
    it("test 4", () => assert(run(91212129) === 9));
  });

  describe("part 2", () => {
    it("test 1", () => assert(run(1212, half) === 6));
    it("test 2", () => assert(run(1221, half) === 0));
    it("test 3", () => assert(run(123425, half) === 4));
    it("test 4", () => assert(run(123123, half) === 12));
    it("test 5", () => assert(run(12131415, half) === 4));
  });
});
