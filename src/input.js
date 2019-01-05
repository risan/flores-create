const meow = require("meow");

const isPathExists = require("./is-path-exists");
const resolveStarterUrl = require("./resolve-starter-url");

const SUPPORTED_PACKAGE_MANAGERS = ["npm", "yarn"];

/**
 * Get CLI input.
 * @return {Object}
 */
const input = async () => {
  const cli = meow(
    `
    Usage
      $ flores-create <path> [--starter] [--package-manager]

      - path: The path where you want to create the Flores website.

    Options
      --starter, -s: The URL of Flores starter template to download.

      If not providied, it will use the default Flores starter template at:
      "https://github.com/risan/flores-starter/archive/master.zip".
      If it's a Github repository and you want to use the master branch, you
      may provide a shorter value: "@risan/flores-starter". Note that you must
      add "@" character in the front.

      --package-manager, -p: The package manager to use ("npm" or "yarn").

    Examples
      $ flores-create my-blog
      $ flores-create my-blog --starter https://github.com/risan/flores-starter/archive/master.zip
      $ flores-create my-blog -s @risan/flores-starter
      $ flores-create my-blog --package-manager npm
      $ flores-create my-blog -p yarn
  `,
    {
      flags: {
        starter: {
          type: "string",
          alias: "s"
        },
        packageManager: {
          type: "string",
          alias: "p"
        }
      }
    }
  );

  if (cli.input.length === 0) {
    throw new Error("The <path> argument is missing.");
  }

  const path = cli.input[0];

  const exists = await isPathExists(path);

  if (exists) {
    throw new Error(`The path "${path}" is already exists.`);
  }

  const packageManager = cli.flags.packageManager
    ? cli.flags.packageManager.toLowerCase()
    : undefined;

  if (packageManager && !SUPPORTED_PACKAGE_MANAGERS.includes(packageManager)) {
    throw new Error(
      `The package manager "${packageManager}" is not supported, use "npm" or "yarn".`
    );
  }

  return {
    path,
    starterUrl: resolveStarterUrl(cli.flags.starter),
    packageManager
  };
};

module.exports = input;
