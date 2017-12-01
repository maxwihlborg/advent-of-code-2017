export default (indata, offset = 1) => {
  const arr = String(indata)
    .trim()
    .split("")
    .map(n => ~~n);

  const finalOffset = typeof offset === 'number' ? offset : offset(arr)

  const sum = arr.reduce(
    (acc, n, i) => acc + (n === arr[(i + finalOffset) % arr.length] ? n : 0),
    0
  );

  return sum;
};
