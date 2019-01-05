# Flores Create

[![Build Status](https://badgen.net/travis/risan/flores-create)](https://travis-ci.org/risan/flores-create)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/flores-create)](https://codecov.io/gh/risan/flores-create)
[![Greenkeeper](https://badges.greenkeeper.io/risan/flores-create.svg)](https://greenkeeper.io)
[![Latest Version](https://badgen.net/npm/v/flores-create)](https://www.npmjs.com/package/flores-create)

The CLI tool for creating a new [Flores](https://github.com/risan/flores) website.

## Documentation

The API documentation and the guide on how to get started are available on [Flores repository](https://github.com/risan/flores#flores).

## Installation

```bash
$ npm install --global flores-create
```

## Usage

```bash
$ flores --help

  Usage
    $ flores-create <path> [--starter] [--package-manager]

    - path: The path where you want to create the Flores website.

  Options
    --starter, -s: The URL of Flores starter template to download.

    If not providied, it will use the default Flores starter template at:
    "https://github.com/risan/flores-starter/archive/master.zip".
    If it's a Github repository and you want to use the master branch, you
    may provide a shorter value: "@risan/flores-starter". Note that you must
    add "@" character in the front.

    --package-manager, -p: The package manager to use ("npm" or "yarn").

  Examples
    $ flores-create my-blog
    $ flores-create my-blog --starter https://github.com/risan/flores-starter/archive/master.zip
    $ flores-create my-blog -s @risan/flores-starter
    $ flores-create my-blog --package-manager npm
    $ flores-create my-blog -p yarn
```

## Related

* [flores](https://github.com/risan/flores): Flores programmatic API.
* [flores-cli](https://github.com/risan/flores-cli): The CLI tool for Flores API.
* [flores-starter](https://github.com/risan/flores-starter): The starter template for Flores website.

## License

[MIT](https://github.com/risan/flores-create/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)
