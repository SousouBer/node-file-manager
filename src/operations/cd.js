import { chdir, cwd } from "node:process";
import path from "node:path";

export const cd = (arg) => {
  const changeDir = path.resolve(cwd(), arg);

  chdir(changeDir);
};
