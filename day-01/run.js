import { read } from "../util";
import run from "./index";

console.log(run(read("day-01/data.txt")));
console.log(run(read("day-01/data.txt"), a => (a.length / 2) | 0));
