const toRows = data =>
  String(data)
    .split("\n")
    .map(n => n.trim())
    .filter(Boolean);

const isUniq = () => {
  const idx = {};
  return word => {
    if (!idx[word]) {
      return (idx[word] = true);
    }
    return false;
  };
};

const sortLetters = word => word.split('').sort().join('')

export const one = data => {
  const phrases = toRows(data);

  const validCount = phrases.reduce((acc, row) => {
    const idx = {};
    const everyUniq = row.split(/\s+/g).every(isUniq());
    return acc + ~~everyUniq;
  }, 0);

  return validCount;
};

export const two = data => {
  const phrases = toRows(data);

  const validCount = phrases.reduce((acc, row) => {
    const idx = {};
    const everyUniq = row
      .split(/\s+/g)
      .map(sortLetters)
      .every(isUniq());

    return acc + ~~everyUniq;
  }, 0);

  return validCount;
};
