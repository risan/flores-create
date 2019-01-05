/* global expect:false, jest:false, test:false */
const cli = require("../src/cli");
const input = require("../src/input");
const isPathExists = require("../src/is-path-exists");

jest.mock("../src/cli");
jest.mock("../src/is-path-exists");

test("it throws error if path argument is missing", async () => {
  expect.assertions(2);

  cli.mockReturnValue({
    input: []
  });

  try {
    await input();
  } catch(error) {
    expect(error.message).toMatch(/missing/i);
    expect(cli).toHaveBeenCalled();
  }
});

test("it throws error if path is already exists", async () => {
  expect.assertions(3);

  cli.mockReturnValue({
    input: ["foo"]
  });

  isPathExists.mockReturnValue(true);

  try {
    await input();
  } catch(error) {
    expect(error.message).toMatch(/exists/i);
    expect(cli).toHaveBeenCalled();
    expect(isPathExists).toHaveBeenCalledWith("foo");
  }
});

test("it throws error if package manager is not supported", async () => {
  expect.assertions(3);

  cli.mockReturnValue({
    input: ["foo"],
    flags: {
      packageManager: "bar"
    }
  });

  isPathExists.mockReturnValue(false);

  try {
    await input();
  } catch(error) {
    expect(error.message).toMatch(/not supported/i);
    expect(cli).toHaveBeenCalled();
    expect(isPathExists).toHaveBeenCalledWith("foo");
  }
});

test("it can return the all required inputs", async () => {
  cli.mockReturnValue({
    input: ["foo"],
    flags: {
      starter: "http://example.com",
      packageManager: "Yarn"
    }
  });

  isPathExists.mockReturnValue(false);

  const data = await input();

  expect(cli).toHaveBeenCalled();
  expect(isPathExists).toHaveBeenCalledWith("foo");
  expect(data).toEqual({
    path: "foo",
    starterUrl: "http://example.com",
    packageManager: "yarn"
  });
});
