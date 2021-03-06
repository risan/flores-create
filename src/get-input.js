const isPathExists = require("./is-path-exists");
const meow = require("./meow");
const resolveStarterUrl = require("./resolve-starter-url");

const SUPPORTED_PACKAGE_MANAGERS = ["npm", "yarn"];

/**
 * Get the CLI input.
 * @return {Object}
 */
const getInput = async () => {
  const { input, flags } = meow();

  if (input.length === 0) {
    throw new Error("The <path> argument is missing.");
  }

  const path = input[0];

  const exists = await isPathExists(path);

  if (exists) {
    throw new Error(`The path "${path}" is already exists.`);
  }

  const packageManager = flags.packageManager
    ? flags.packageManager.toLowerCase()
    : undefined;

  if (packageManager && !SUPPORTED_PACKAGE_MANAGERS.includes(packageManager)) {
    throw new Error(
      `The package manager "${packageManager}" is not supported, use "npm" or "yarn".`
    );
  }

  return {
    path,
    starterUrl: resolveStarterUrl(flags.starter),
    packageManager
  };
};

module.exports = getInput;
