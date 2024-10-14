import fs from "node:fs";
import zlib from "node:zlib";
import { stdout } from "node:process";
import path from "node:path";

import errorMessages from "../errorMessages.js";

export const compress = (args) => {
  const [pathToFileToCompress, destinationPath] = args;

  const pathToFileToCompressResolve = path.resolve(pathToFileToCompress);

  const destinationPathResolve = path.resolve(
    destinationPath,
    path.basename(pathToFileToCompressResolve) + ".br"
  );

  if (
    !args ||
    args.length !== 2 ||
    !fs.existsSync(pathToFileToCompressResolve) ||
    !fs.existsSync(path.dirname(destinationPathResolve))
  ) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const brotli = zlib.createBrotliCompress();

  const rs = fs.createReadStream(pathToFileToCompressResolve);
  const ws = fs.createWriteStream(destinationPathResolve);

  rs.pipe(brotli).pipe(ws);
};
