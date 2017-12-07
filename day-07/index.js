const aRe = /(\w+)\s+\((\d+)\)/;
const toNodes = data =>
  String(data)
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean)
    .map(r => {
      const [head, tail = ""] = r.split(/\s+->\s+/);
      const [_, name, weight] = aRe.exec(head);
      const children = tail.split(/\,\s+/).filter(Boolean);

      return [name, ~~weight, children];
    });

const toTree = nodes =>
  nodes.reduce(
    (acc, n) => {
      n[2].forEach(cn => acc[cn].push(n[0]));
      return acc;
    },
    nodes.reduce(
      (acc, n) =>
        Object.assign(acc, {
          [n[0]]: n
        }),
      {}
    )
  );

export const one = data => {
  const tree = toTree(toNodes(data));
  const baseNode = Object.values(tree).find(n => n.length < 4);

  return baseNode[0];
};

export const two = data => {
  const tree = toTree(toNodes(data));
  const baseNode = Object.values(tree).find(n => n.length < 4);

  const calcWeight = name => {
    const n = tree[name];
    return n[2].reduce((acc, cn) => acc + calcWeight(cn), n[1]);
  };

  const weights = Object.keys(tree).reduce(
    (acc, n) =>
      Object.assign(acc, {
        [n]: calcWeight(n)
      }),
    {}
  );

  const findUnbalancedIdx = ws =>
    ws.findIndex(cw => ws.reduce((acc, w) => acc + ~~(cw === w), 0) === 1);

  const findUnbalanced = n => {
    const cws = n[2].map(cn => weights[cn]);
    const idx = findUnbalancedIdx(cws);

    return idx === -1 ? n : findUnbalanced(tree[n[2][idx]]);
  };

  const u = findUnbalanced(baseNode);
  const up = tree[u[3]];
  const upw = up[2].map(cn => weights[cn]);
  const idx = findUnbalancedIdx(upw);
  const idx2 = (idx + 1) % upw.length;

  const diff = upw[idx] - upw[idx2];

  return u[1] - diff;
};
