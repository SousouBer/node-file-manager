import { stdout } from "node:process";

export const greeting = (username) => {
  stdout.write(`Welcome to the File Manager, ${username}!\n`);
};
