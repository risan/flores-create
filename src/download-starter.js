const download = require("download");

/**
 * Download the starter.
 * @param  {String} options.url         - The starter URL to download.
 * @param  {String} options.destination - The path to store the starter.
 * @return {Promise}
 */
const downloadStarter = ({ url, destination }) =>
  download(url, destination, {
    extract: true,
    strip: 1
  });

module.exports = downloadStarter;
