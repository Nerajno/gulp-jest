[![Build Status](https://travis-ci.org/alansouzati/gulp-jest.svg?branch=master)](https://travis-ci.org/alansouzati/gulp-jest)
[![Code Climate](https://codeclimate.com/github/alansouzati/gulp-jest/badges/gpa.svg)](https://codeclimate.com/github/alansouzati/gulp-jest)
[![Test Coverage](https://codeclimate.com/github/alansouzati/gulp-jest/badges/coverage.svg)](https://codeclimate.com/github/alansouzati/gulp-jest/coverage)

# [gulp](http://gulpjs.com)-jest

Gulp plugin for the Jest test library

## Installation

```bash
$ npm install gulp-jest
```

## Usage

```javascript
var jest = require('gulp-jest');

gulp.task('jest', function () {
  return gulp.src('__tests__').pipe(jest({
    config: {
      "preprocessorIgnorePatterns": [
        "<rootDir>/dist/", "<rootDir>/node_modules/"
      ],
      "automock": false
    }
  }));
});

```

## API

### jest(options)

#### options

as per [Jest config](http://facebook.github.io/jest/docs/api.html#config-options)

## License

MIT © [Dominic Barker](http://www.dombarker.co.uk)
