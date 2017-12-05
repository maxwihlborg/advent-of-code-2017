const sideLen = n => 2 * n + 1;
const maxVal = n => sideLen(n) ** 2;

export const one = target => {
  let n = 0;
  while (maxVal(n) < target) {
    n++;
  }

  const len = sideLen(n);

  const startVal = maxVal(n - 1) + 1;
  const endVal = maxVal(n);
  const steps = target - startVal;

  for (let j = 0; j < 4; j++) {
    if (steps <= (j + 1) * (len - 1) - 1) {
      const m = j * (len - 1) - 1 + (len - 1) / 2;
      return Math.abs(steps - m) + n;
    }
  }

  return null;
};

export const two = target => {
  const key = (x, y) => `${x}:${y}`;
  const coords = {
    [key(0, 0)]: 1
  };

  const neighbours = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
  ];

  let n = 1;
  let i = 1;
  while (true) {
    i++;
    const startVal = maxVal(Math.max(0, n - 1)) + 1;
    const len = sideLen(n);

    const s = i - startVal; // step
    const q = (s / (len - 1)) | 0; // quadrant
    const m = q * (len - 1) - 1 + (len - 1) / 2; // midpoint

    let x, y;
    switch (q) {
      case 0:
        x = n;
        y = m - s;
        break;
      case 1:
        x = m - s;
        y = -n;
        break;
      case 2:
        x = -n;
        y = s - m;
        break;
      case 3:
        x = s - m;
        y = n;
        break;
    }

    const val = (coords[key(x, y)] = neighbours.reduce((acc, [dx, dy]) => {
      return acc + (coords[key(x + dx, y + dy)] || 0);
    }, 0));

    if (val > target) {
      return val;
    }

    if (i >= maxVal(n)) {
      n++;
    }
  }
};
