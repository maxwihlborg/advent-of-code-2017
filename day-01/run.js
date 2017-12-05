import { read } from "../util";
import { one, two } from "./index";

console.log("Part 1", one(read("day-01/data.txt")));
console.log("Part 2", two(read("day-01/data.txt")));
