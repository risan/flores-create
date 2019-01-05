/* global expect:false, test:false */
const resolveStarterUrl = require("../src/resolve-starter-url");

test("it can resolve starter on github repository", () => {
  const url = resolveStarterUrl("@foo/bar");

  expect(url).toBe("https://github.com/foo/bar/archive/master.zip");
});

test("it returns starter URL as is", () => {
  const url = resolveStarterUrl("http://example.com");

  expect(url).toBe("http://example.com");
});
