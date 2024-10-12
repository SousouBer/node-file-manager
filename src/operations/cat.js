import fs from "node:fs";
import path from "node:path";

import { stdout } from "node:process";

import errorMessages from "../errorMessages.js";

export const cat = (fileName) => {
  const filePath = path.resolve(fileName);

  const rs = fs.createReadStream(filePath);

  rs.pipe(stdout);

  rs.on("error", () => {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
  });
};
