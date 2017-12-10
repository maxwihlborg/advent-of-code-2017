import { pipe, toRows, firstRow } from "../util";

const toArr = r => r[0].split(/,\s*/).map(n => ~~n);
const getArr = len => new Array(len).fill(0).map((_, i) => i);
const toASCII = str => [].map.call(str, s => s.charCodeAt(0));

const getCheckSum = len => data => {
  let skip = 0;
  let pos = 0;

  const arr = data.reduce((acc, v) => {
    if (v > len) return acc;

    const revArr = []
      .concat(acc.slice(pos, pos + v))
      .concat(acc.slice(0, Math.max(0, v - (len - pos))));

    for (let i = 0; i < v; i++) {
      acc[(pos + i) % len] = revArr[v - (i + 1)];
    }

    pos = (pos + v + skip) % len;
    skip += 1;

    return acc;
  }, getArr(len));

  return arr[0] * arr[1];
};

const knotHash = arr => {
  const input = arr.concat([17, 31, 73, 47, 23]);
  const rounds = 64;
  const len = 256;

  const roundInput = getArr(rounds).reduce(acc => {
    return acc.concat(input);
  }, []);

  let skip = 0;
  let pos = 0;

  const output = roundInput.reduce((acc, v) => {
    if (v > len) return acc;

    const revArr = []
      .concat(acc.slice(pos, pos + v))
      .concat(acc.slice(0, Math.max(0, v - (len - pos))));

    for (let i = 0; i < v; i++) {
      acc[(pos + i) % len] = revArr[v - (i + 1)];
    }

    pos = (pos + v + skip) % len;
    skip += 1;

    return acc;
  }, getArr(len));

  const numericHash = output.reduce((acc, v, i) => {
    const j = (i / 16) | 0;
    acc[j] = (acc[j] || 0) ^ v;
    return acc;
  }, []);

  const hash = numericHash.reduce((acc, v) => {
    const n = v.toString(16);
    return acc + (n.length > 1 ? n : `0${n}`);
  }, "");

  return hash;
};

export const one = len => pipe(toRows, firstRow, toArr, getCheckSum(len));
export const two = pipe(toRows, firstRow, toASCII, knotHash);
