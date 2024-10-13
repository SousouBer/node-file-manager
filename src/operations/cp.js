import fs from "node:fs";
import { stdout } from "node:process";
import path from "node:path";

import errorMessages from "../errorMessages.js";

export const cp = (args) => {
  const [filePath, copyFilePath] = args;

  const filePathResolve = path.resolve(filePath);
  const destinationPath = path.resolve(copyFilePath);

  if (
    !fs.existsSync(filePathResolve) ||
    !fs.existsSync(path.dirname(destinationPath))
  ) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const rs = fs.createReadStream(filePathResolve);
  const ws = fs.createWriteStream(destinationPath);

  rs.pipe(ws);
};
