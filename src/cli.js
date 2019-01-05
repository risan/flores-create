const meow = require("meow");

/**
 * Get CLI input.
 * @return {Object}
 */
const cli = () =>
  meow(
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

module.exports = cli;
