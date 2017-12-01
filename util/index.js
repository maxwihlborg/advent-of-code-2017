import fs from "fs";
import path from "path";

export const read = file => {
  return fs.readFileSync(path.join(__dirname, '..', file)).toString();
};
