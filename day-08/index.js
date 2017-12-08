import { pipe, toRows } from "../util";

const toInstructs = rows =>
  rows
    .map(s => s.split(/\s+/))
    .map(r => [r[0], r[1], ~~r[2], r[4], r[5], ~~r[6]]);

const getMaxReg = data => {
  const regs = data.reduce((acc, [ur, op, uv, cr, cop, cov]) => {
    acc[ur] = acc[ur] || 0;
    acc[cr] = acc[cr] || 0;

    let v = false;
    switch (cop) {
      case ">":
        v = acc[cr] > cov;
        break;
      case "<":
        v = acc[cr] < cov;
        break;
      case ">=":
        v = acc[cr] >= cov;
        break;
      case "<=":
        v = acc[cr] <= cov;
        break;
      case "==":
        v = acc[cr] === cov;
        break;
      case "!=":
        v = acc[cr] != cov;
        break;
    }
    if (v) {
      acc[ur] += (1 - 2 * (op == "dec")) * uv;
    }
    return acc;
  }, {});

  const max = Object.values(regs).reduce((acc, v) => Math.max(acc, v), 0);

  return max;
};

const getMaxEverReg = data => {
  let max = 0;
  const regs = data.reduce((acc, [ur, op, uv, cr, cop, cov]) => {
    acc[ur] = acc[ur] || 0;
    acc[cr] = acc[cr] || 0;

    let v = false;
    switch (cop) {
      case ">":
        v = acc[cr] > cov;
        break;
      case "<":
        v = acc[cr] < cov;
        break;
      case ">=":
        v = acc[cr] >= cov;
        break;
      case "<=":
        v = acc[cr] <= cov;
        break;
      case "==":
        v = acc[cr] === cov;
        break;
      case "!=":
        v = acc[cr] != cov;
        break;
    }
    if (v) {
      acc[ur] += (1 - 2 * (op == "dec")) * uv;
    }
    max = Math.max(max, acc[ur]);
    return acc;
  }, {});

  return max;
};

export const one = pipe(toRows, toInstructs, getMaxReg);
export const two = pipe(toRows, toInstructs, getMaxEverReg);
