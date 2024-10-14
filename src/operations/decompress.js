import fs from "node:fs";
import zlib from "node:zlib";
import { stdout } from "node:process";
import path from "node:path";

import errorMessages from "../errorMessages.js";

export const decompress = (args) => {
  const [pathToFileToDecompress, destinationPath] = args;

  const pathToFileToDecompressResolve = path.resolve(pathToFileToDecompress);

  const destinationPathResolve = path.resolve(
    destinationPath,
    path.basename(pathToFileToDecompressResolve, ".br")
  );

  if (
    !args ||
    args.length !== 2 ||
    !fs.existsSync(pathToFileToDecompressResolve) ||
    !fs.existsSync(path.dirname(destinationPathResolve))
  ) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const brotli = zlib.createBrotliDecompress();

  const rs = fs.createReadStream(pathToFileToDecompressResolve);
  const ws = fs.createWriteStream(destinationPathResolve);

  rs.pipe(brotli).pipe(ws);
};
