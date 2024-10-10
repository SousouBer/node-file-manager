import { stdout, cwd } from "node:process";

export const getCurrentDirectory = () => {
  stdout.write(`You are currently in ${cwd()}\n`);
};
