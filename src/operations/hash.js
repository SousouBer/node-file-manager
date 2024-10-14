import fs from "node:fs";
import { stdout } from "node:process";
import crypto from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";

import errorMessages from "../errorMessages.js";

export const hash = async (args) => {
  const filePath = path.resolve(args[0]);

  if (!args || args.length !== 1 || !existsSync(filePath)) {
    stdout.write(`\nhere: ${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const hash = crypto.createHash("sha256");
  const rs = fs.createReadStream(filePath);

  rs.pipe(hash).on("finish", () => {
    const calculatedHash = hash.digest("hex");
    stdout.write(`\nCalculated Hash: ${calculatedHash}\n`);
  });
};
