import { getUsername } from "./src/helpers/getUsername.js";
import { getCurrentDirectory } from "./src/helpers/getCurrentDirectory.js";
import { greeting } from "./src/helpers/getGreetingText.js";
import { goodbye } from "./src/helpers/getGoodbyeText.js";

import { stdin } from "node:process";

const app = () => {
  stdin.setEncoding("utf-8");

  const username = getUsername();

  getCurrentDirectory();

  greeting(username);

  stdin.on("data", (chunk) => {
    getCurrentDirectory();

    const input = chunk.trim();

    if (input === ".exit") {
      goodbye(username);

      process.exit(0);
    }
  });

  process.on("SIGINT", () => {
    goodbye(username);

    process.exit(0);
  });
};

app();
