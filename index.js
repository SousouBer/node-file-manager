import { stdin } from "node:process";

import { getUsername } from "./src/helpers/getUsername.js";
import { currentDirectory } from "./src/helpers/getCurrentDirectory.js";
import { greeting } from "./src/helpers/getGreetingText.js";
import { goodbye } from "./src/helpers/getGoodbyeText.js";

import { up } from "./src/operations/up.js";
import { cd } from "./src/operations/cd.js";
import { operation } from "./src/operations.js";

const app = () => {
  stdin.setEncoding("utf-8");

  const username = getUsername();

  currentDirectory();

  greeting(username);

  stdin.on("data", (chunk) => {
    // currentDirectory();

    const input = chunk.trim();

    if (input === ".exit") {
      goodbye(username);

      process.exit(0);
    }

    // const [command, ...args] = input.split(" ");

    // if (command === "cd") {
    //   cd(...args);
    //   currentDirectory();
    // }
    // console.log("inp: ", command, args);
    operation(input);
  });

  process.on("SIGINT", () => {
    goodbye(username);

    process.exit(0);
  });
};

app();
