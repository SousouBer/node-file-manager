import { stdout } from "node:process";

export const goodbye = (username) => {
  stdout.write(`\nThank you for using File Manager, ${username}, goodbye!\n`);
};
