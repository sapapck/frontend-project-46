### Hexlet tests and linter status:
[![Actions Status](https://github.com/sapapck/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/sapapck/frontend-project-46/actions)
![Actions Status](https://github.com/sapapck/frontend-project-46/actions/workflows/node.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/c35eae4c694440ca7de6/maintainability)](https://codeclimate.com/github/sapapck/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c35eae4c694440ca7de6/test_coverage)](https://codeclimate.com/github/sapapck/frontend-project-46/test_coverage)

---

# Description

GenDiff is a cli-app that generates the difference between two files and outputs it in one of three formats.
The app works with formats json and yaml(yml).
Supported output formats: stylish, plain and json.

---
## Installation:

Attention! Commands must be run from the app directory!

Installing dependencies

```
make install
```

Installing a package with app

The following command will be run as root!

```
make link
```
---

## Usage:

```
Usage: gendiff [-h] [-V] [-f] <filepath1> <filepath2>

Optional arguments:
  -V, --version  Show program's version number and exit.
  -f, --format   Choose output format.
  -h, --help     Show this help message and exit.

```

## Supported formats:

### stylish
[![asciicast](https://asciinema.org/a/Sn8PhmeJLv3VIJhQ2MwbiXPiX)](https://asciinema.org/a/Sn8PhmeJLv3VIJhQ2MwbiXPiX) 

### plain
 [![asciicast](https://asciinema.org/a/ern1I0x8F4eMaaTJxXE8EDZFH)](https://asciinema.org/a/ern1I0x8F4eMaaTJxXE8EDZFH)

### json
 [![asciicast](https://asciinema.org/a/CqTMrrHt3KZHQHGogZ6H2AGOR)](https://asciinema.org/a/CqTMrrHt3KZHQHGogZ6H2AGOR)