import { pipe, toRows } from "../util";

const toArr = r => r[0].split("");

const totalScore = chrs => {
  let skip = false;
  let garbage = false;
  let level = 0;
  let score = 0;

  for (const ch of chrs) {
    if (skip) {
      skip = false;
      continue;
    }
    switch (ch) {
      case "{":
        level += !garbage;
        break;
      case "}":
        if (!garbage) {
          score += level;
          level -= 1;
        }
        break;
      case "<":
        garbage = true;
        break;
      case ">":
        garbage = false;
        break;
      case "!":
        skip = true;
        break;
    }
  }

  return score;
};

const calcRubbish = chrs => {
  let skip = false;
  let garbage = false;
  let count = 0;

  for (const ch of chrs) {
    if (skip) {
      skip = false;
      continue;
    }
    switch (ch) {
      case "<":
        count += garbage;
        garbage = true;
        break;
      case ">":
        garbage = false;
        break;
      case "!":
        skip = true;
        break;
      default:
        count += garbage;
        break;
    }
  }

  return count;
};

export const one = pipe(toRows, toArr, totalScore);
export const two = pipe(toRows, toArr, calcRubbish);
