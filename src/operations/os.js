import machineInfo, { machine } from "node:os";
import { stdout } from "node:process";

export const os = (args) => {
  if (!args || args.length !== 1) {
    stdout.write(`\n${errorMessages.OPERATION_FAILED}\n`);
    return;
  }

  const machineOption = args[0];

  switch (machineOption) {
    case "--EOL":
      stdout.write(
        `\nEnd-Of-Line Marker: ${JSON.stringify(machineInfo.EOL)}\n`
      );
      break;
    case "--cpus":
      machineInfo.cpus().forEach(({ model, speed }, id) => {
        stdout.write(`\nCPU: ${id + 1}\n`);
        stdout.write(`\nModel: ${model}\n`);
        stdout.write(`\nSpeed: ${speed}\n`);
      });
      stdout.write(`\nCPUs: ${machineInfo.cpus().length}\n`);
      break;
    case "--homedir":
      stdout.write(`\n${machineInfo.homedir()}\n`);
    case "--username":
      stdout.write(`\n${machineInfo.userInfo().username}\n`);
      break;
    case "--architecture":
      stdout.write(`\n${machineInfo.arch()}\n`);
      break;
    default:
      stdout.write("\nInvalid input\n");
  }
};
