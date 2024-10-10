import { argv } from "node:process";

export const getUsername = () => {
  const argArray = argv.slice(2);

  const arg = argArray.find((arg) => arg.startsWith("--username"));

  if (arg) {
    return arg.split("=")[1];
  }

  return null;
};
