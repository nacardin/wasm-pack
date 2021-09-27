const binaryPath = "wasm-pack";

const error = (msg) => {
  console.error(msg);
  process.exit(1);
};

const run = () => {
  if (!existsSync(binaryPath)) {
    error(`You must install ${binaryPath} before you can run it`);
  }

  const [, , ...args] = process.argv;

  const options = { cwd: process.cwd(), stdio: "inherit" };

  const result = spawnSync(binaryPath, args, options);

  if (result.error) {
    error(result.error);
  }

  process.exit(result.status);
};

const install = () => {
  console.log(`${this.binaryPath} has been installed!`);
};

const uninstall = () => {
  console.log(`${this.binaryPath} has been uninstalled`);
};

module.exports = {
  install,
  run,
  uninstall,
};
