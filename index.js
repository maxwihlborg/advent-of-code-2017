import fs from "fs";
import path from "path";
import minimist from "minimist";

const [day] = minimist(process.argv.slice(2))._;
const filePath = path.resolve(__dirname, day, "run.js");

if (fs.existsSync(filePath)) {
  require(filePath);
}
