const toArr = data =>
  String(data)
    .trim()
    .split(/\s+/)
    .map(n => ~~n);

export const one = data => {
  const blocks = toArr(data);
  const hash = arr => arr.join(":");

  const history = new Set();
  let sc = 0;

  while (!history.has(hash(blocks))) {
    history.add(hash(blocks));

    let maxBlock = blocks.reduce((acc, b) => Math.max(acc, b), 0);
    let idx = blocks.findIndex(v => v === maxBlock);
    blocks[idx] = 0;

    while (maxBlock > 0) {
      blocks[++idx % blocks.length] += 1;
      maxBlock--;
    }

    sc++;
  }

  return sc;
};

export const two = data => {
  const blocks = toArr(data);
  const hash = arr => arr.join(":");

  const history = new Map();
  let sc = 0;

  while (!history.has(hash(blocks))) {
    history.set(hash(blocks), sc);

    let maxBlock = blocks.reduce((acc, b) => Math.max(acc, b), 0);
    let idx = blocks.findIndex(v => v === maxBlock);
    blocks[idx] = 0;

    while (maxBlock > 0) {
      blocks[++idx % blocks.length] += 1;
      maxBlock--;
    }

    sc++;
  }

  return sc - history.get(hash(blocks));
};
