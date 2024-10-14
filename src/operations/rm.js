import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { stdout } from "node:process";

import errorMessages from "../errorMessages.js";

export const rm = async (args) => {
  const filePath = args[0];

  if (!args || args.length !== 1 || !existsSync(filePath)) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  try {
    await fs.unlink(filePath);
  } catch {
    throw new Error();
  }
};
