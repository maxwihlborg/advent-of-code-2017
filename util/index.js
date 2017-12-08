import fs from "fs";
import path from "path";

export const read = file =>
  fs.readFileSync(path.join(__dirname, "..", file)).toString();

export const pipe = (fn, ...fns) => (...args) =>
  fns.reduce((acc, f) => f(acc), fn(...args));

export const compose = (...fns) => pipe(...fns.reverse());

export const toRows = data =>
  String(data)
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);
