const fs = require("fs");
const util = require("util");

const access = util.promisify(fs.access);

/**
 * Check if the given path is exists.
 * @param  {String} p - The path to test.
 * @return {Boolean}
 */
const isPathExists = async p => {
  try {
    await access(p, fs.constants.F_OK);

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = isPathExists;
