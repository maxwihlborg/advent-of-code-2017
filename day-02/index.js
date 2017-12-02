const toMatrix = data =>
  data
    .split("\n")
    .map(r => r.trim())
    .filter(Boolean)
    .map(s => s.split(/\s+/).map(n => ~~n));

export const one = data => {
  const mx = toMatrix(data);

  const minMaxMx = mx.map(row => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    row.forEach(n => {
      min = Math.min(min, n);
      max = Math.max(max, n);
    });
    return [min, max];
  });

  const sum = minMaxMx.reduce((acc, [min, max]) => {
    return acc + (max - min);
  }, 0);

  return sum;
};

export const two = data => {
  const mx = toMatrix(data);

  const devisibleResults = mx.map(row => {
    for (let i = 0; i < row.length - 1; i++) {
      for (let j = i + 1; j < row.length; j++) {
        const a = row[i];
        const b = row[j];
        const n = a > b ? a / b : b / a;
        if (n === (n | 0)) {
          return n;
        }
      }
    }
    return 0;
  });

  const sum = devisibleResults.reduce((acc, n) => {
    return acc + n;
  }, 0);

  return sum;
};
