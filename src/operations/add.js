import fs from "node:fs";
import path from "node:path";
import { cwd, stdout } from "node:process";
import errorMessages from "../errorMessages.js";

export const add = async (args) => {
  if (!args || args.length !== 1) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const currentDirectory = cwd();
  const filePath = path.resolve(currentDirectory, args[0]);

  const ws = fs.createWriteStream(filePath);

  ws.on("error", () => {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
  });

  ws.end();
};
