const DEFAULT_STARTER = "@risan/flores-starter";

/**
 * Resolve starter url.
 * @param  {String} starter - The starter name or url.
 * @return {String}
 */
const resolveStarterUrl = starter => {
  const url = starter || DEFAULT_STARTER;

  const githubMatch = url.match(/^@(\S+)/);

  return githubMatch
    ? `https://github.com/${githubMatch[1]}/archive/master.zip`
    : url;
};

module.exports = resolveStarterUrl;
