const install = require("install-packages");

/**
 * Install the dependencies.
 * @param  {String} path           - Path to project directory.
 * @param  {String} packageManager - The package manager to use.
 * @return {Promise}
 */
const installDependencies = (path, packageManager) =>
  install({
    cwd: path,
    packageManager
  });

module.exports = installDependencies;
