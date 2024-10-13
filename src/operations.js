import { cd } from "./operations/cd.js";
import { up } from "./operations/up.js";
import { currentDirectory } from "./helpers/getCurrentDirectory.js";

import { commandsList } from "./commandsList.js";
import errorMessages from "./errorMessages.js";
import { stdout } from "node:process";
import { cat } from "./operations/cat.js";
import { add } from "./operations/add.js";
import { rn } from "./operations/rn.js";
import { cp } from "./operations/cp.js";
import { mv } from "./operations/mv.js";

export const operation = async (input) => {
  const [command, ...args] = input.split(" ");

  if (!commandsList.includes(command)) {
    stdout.write(`\n${errorMessages.INVALID_INPUT}\n`);
    return;
  }

  try {
    switch (command) {
      case "up":
        up();
        break;
      case "cd":
        cd(...args);
        break;
      case "ls":
        ls();
        break;
      case "cat":
        cat(...args);
        break;
      case "add":
        add(args);
        break;
      case "rn":
        await rn(args);
        break;
      case "cp":
        cp(args);
        break;
      case "mv":
        mv(args);
        break;
    }
  } catch {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
  } finally {
    currentDirectory();
  }
};
