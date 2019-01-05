/* global expect:false, jest:false, test:false */
const download = require("download");

const downloadStarter = require("../src/download-starter");

jest.mock("download");

test("it should download the url to the destination", () => {
  download.mockReturnValue("foo");

  const result = downloadStarter({
    url: "http://example.com",
    destination: "my-blog"
  });

  expect(download).toHaveBeenCalledWith("http://example.com", "my-blog", {
    extract: true,
    strip: 1
  });

  expect(result).toBe("foo");
});
