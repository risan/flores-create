/* global expect:false, jest:false, test:false */
/* eslint no-console: "off" */
const cli = require("../src/cli");

const downloadStarter = require("../src/download-starter");
const getInput = require("../src/get-input");
const installDependencies = require("../src/install-dependencies");

jest.mock("../src/download-starter");
jest.mock("../src/get-input");
jest.mock("../src/install-dependencies");

console.log = jest.fn();

test("it can download the starter and install the dependencies", async () => {
  getInput.mockReturnValue({
    path: "my-blog",
    starterUrl: "http://example.com",
    packageManager: "yarn"
  });

  await cli();

  expect(getInput).toHaveBeenCalled();

  expect(downloadStarter).toHaveBeenCalledWith({
    url: "http://example.com",
    destination: "my-blog"
  });

  expect(installDependencies).toHaveBeenCalledWith("my-blog", "yarn");

  const logLastArgs = console.log.mock.calls[console.log.mock.calls.length - 1];

  expect(logLastArgs[0]).toMatch(/my-blog/i);
});
