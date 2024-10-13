import fs from "node:fs/promises";
import path from "node:path";

export const rn = async (args) => {
  const [filePath, newFileName] = args;

  const directoryName = path.dirname(filePath);
  const newFilePath = path.resolve(directoryName, newFileName);

  try {
    await fs.rename(filePath, newFilePath);
  } catch {
    throw new Error();
  }
};
