/* global expect:false test:false */
const isPathExists = require("../src/is-path-exists");

test("it returns true is path is exists", async () => {
  const exists = await isPathExists(__dirname);

  expect(exists).toBe(true);
});

test("it returns false is path does not exists", async () => {
  const exists = await isPathExists("/foo/bar/baz/qux");

  expect(exists).toBe(false);
});
