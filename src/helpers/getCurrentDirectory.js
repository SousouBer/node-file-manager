import { stdout, cwd } from "node:process";

export const currentDirectory = () => {
  stdout.write(`You are currently in ${cwd()}\n`);
};
