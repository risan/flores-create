#!/usr/bin/env node
/* eslint no-console: "off" */
const cli = require("./cli");

(async () => {
  try {
    await cli();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
