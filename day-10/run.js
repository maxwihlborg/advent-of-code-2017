import { read } from "../util";
import { one, two } from "./index";

console.log("Part 1", one(256)(read("day-10/data.txt")));
console.log("Part 2", two(read("day-10/data.txt")));
