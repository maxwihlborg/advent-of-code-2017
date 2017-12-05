const toArr = data =>
  String(data)
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean)
    .map(n => ~~n);

export const one = data => {
  const steps = toArr(data);

  let i = 0; // index
  let sc = 0; // step count
  while (i < steps.length) {
    [steps[i], i] = [steps[i] + 1, i + steps[i]];
    sc += 1;
  }

  return sc;
};

export const two = data => {
  const steps = toArr(data);

  let i = 0; // index
  let sc = 0; // step count
  while (i < steps.length) {
    [steps[i], i] = [steps[i] + (steps[i] >= 3 ? -1 : 1), i + steps[i]];
    sc += 1;
  }

  return sc;
};
