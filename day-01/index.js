const toArr = data =>
  String(data)
    .trim()
    .split("")
    .map(n => ~~n);

export const one = data => {
  const arr = toArr(data);

  const offset = 1;

  const sum = arr.reduce(
    (acc, n, i) => acc + (n === arr[(i + offset) % arr.length] ? n : 0),
    0
  );

  return sum;
};

export const two = data => {
  const arr = toArr(data);

  const offset = (arr.length / 2) | 2;

  const sum = arr.reduce(
    (acc, n, i) => acc + (n === arr[(i + offset) % arr.length] ? n : 0),
    0
  );

  return sum;
};
