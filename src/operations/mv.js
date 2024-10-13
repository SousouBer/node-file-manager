import fs from "node:fs";
import fsPromise from "node:fs/promises";

import { stdout } from "node:process";
import path from "node:path";

import errorMessages from "../errorMessages.js";

export const mv = (args) => {
  const [filePath, destinationPath] = args;

  const filePathResolve = path.resolve(filePath);
  const destinationPathResolve = path.resolve(
    destinationPath,
    path.basename(filePathResolve)
  );

  if (!fs.existsSync(filePathResolve) || !fs.existsSync(destinationPath)) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const rs = fs.createReadStream(filePathResolve);
  const ws = fs.createWriteStream(destinationPathResolve);

  ws.on("finish", async () => {
    await fsPromise.unlink(filePathResolve);
  });

  rs.pipe(ws);
};
