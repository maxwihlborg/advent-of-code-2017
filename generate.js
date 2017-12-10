import minimist from "minimist";
import path from "path";
import fs from "fs";

const [day] = minimist(process.argv.slice(2))._;

const finalDay = day || new Date().getDate();
const namespace = `day-${finalDay < 10 ? "0" + finalDay : finalDay}`;

const testTemplate =
  "" +
  `import { assert } from "chai";
import { one, two } from "./index";

describe("day ${finalDay}", () => {
  describe("part 1", () => {
    it("test 1", () => assert.equal(one(), undefined));
  });
  describe("part 2", () => {
    it("test 1", () => assert.equal(one(), undefined));
  });
});`;

const indexTemplate =
  "" +
  `import { pipe, toRows } from "../util";

export const one = pipe(toRows);
export const two = pipe(toRows);`;

const runTemplate =
  "" +
  `import { read } from "../util";
import { one, two } from "./index";

console.log("Part 1", one(read("${namespace}/data.txt")));
console.log("Part 2", two(read("${namespace}/data.txt")));`;

try {
fs.mkdirSync(path.resolve(__dirname, namespace));
} catch (e) {}
fs.writeFileSync(path.resolve(__dirname, namespace, "index.js"), indexTemplate);
fs.writeFileSync(
  path.resolve(__dirname, namespace, "test.spec.js"),
  testTemplate
);
fs.writeFileSync(path.resolve(__dirname, namespace, "run.js"), runTemplate);
fs.writeFileSync(path.resolve(__dirname, namespace, "data.txt"), "");
