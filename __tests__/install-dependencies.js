/* global expect:false, jest:false, test:false */
const install = require("install-packages");

const installDependencies = require("../src/install-dependencies");

jest.mock("install-packages");

test("it should install the dependencies", () => {
  install.mockReturnValue("foo");

  const result = installDependencies("my-blog", "npm");

  expect(install).toHaveBeenCalledWith({
    cwd: "my-blog",
    packageManager: "npm"
  });

  expect(result).toBe("foo");
});
