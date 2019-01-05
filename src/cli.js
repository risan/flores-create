/* eslint no-console: "off" */
const redent = require("redent");

const downloadStarter = require("./download-starter");
const getInput = require("./get-input");
const installDependencies = require("./install-dependencies");

/**
 * Run the CLI app.
 * @return {Promise}
 */
const cli = async () => {
  const { path, starterUrl, packageManager } = await getInput();

  await downloadStarter({ url: starterUrl, destination: path });

  console.log("✅ Starter template is downloaded.");

  await installDependencies(path, packageManager);

  console.log("✅ Dependencies are installed.");

  console.log(
    redent(
      `
    🎉 You're all set!

    Go to your project directory:
      $ cd ${path}

    Run the following command to generate the website:
      $ npm run build

    Run the following command to generate the website and preview it on the
    built-in server:
      $ npm run serve

    Run the following command to automatically regenerate the website and
    reload the browser upon file changes:
      $ npm run watch
  `,
      2
    )
  );
};

module.exports = cli;
