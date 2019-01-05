/* global expect:false, jest:false, test:false */
const getInput = require("../src/get-input");
const meow = require("../src/meow");
const isPathExists = require("../src/is-path-exists");

jest.mock("../src/is-path-exists");
jest.mock("../src/meow");

test("it throws error if path argument is missing", async () => {
  expect.assertions(2);

  meow.mockReturnValue({
    input: []
  });

  try {
    await getInput();
  } catch (error) {
    expect(error.message).toMatch(/missing/i);
    expect(meow).toHaveBeenCalled();
  }
});

test("it throws error if path is already exists", async () => {
  expect.assertions(3);

  meow.mockReturnValue({
    input: ["foo"]
  });

  isPathExists.mockReturnValue(true);

  try {
    await getInput();
  } catch (error) {
    expect(error.message).toMatch(/exists/i);
    expect(meow).toHaveBeenCalled();
    expect(isPathExists).toHaveBeenCalledWith("foo");
  }
});

test("it throws error if package manager is not supported", async () => {
  expect.assertions(3);

  meow.mockReturnValue({
    input: ["foo"],
    flags: {
      packageManager: "bar"
    }
  });

  isPathExists.mockReturnValue(false);

  try {
    await getInput();
  } catch (error) {
    expect(error.message).toMatch(/not supported/i);
    expect(meow).toHaveBeenCalled();
    expect(isPathExists).toHaveBeenCalledWith("foo");
  }
});

test("it can return the all required inputs", async () => {
  meow.mockReturnValue({
    input: ["foo"],
    flags: {
      starter: "http://example.com",
      packageManager: "Yarn"
    }
  });

  isPathExists.mockReturnValue(false);

  const data = await getInput();

  expect(meow).toHaveBeenCalled();
  expect(isPathExists).toHaveBeenCalledWith("foo");
  expect(data).toEqual({
    path: "foo",
    starterUrl: "http://example.com",
    packageManager: "yarn"
  });
});
