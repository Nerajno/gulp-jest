[![Build Status](https://travis-ci.org/alansouzati/gulp-jest.svg?branch=master)](https://travis-ci.org/alansouzati/gulp-jest)
[![Code Climate](https://codeclimate.com/github/alansouzati/gulp-jest/badges/gpa.svg)](https://codeclimate.com/github/alansouzati/gulp-jest)
[![Test Coverage](https://codeclimate.com/github/alansouzati/gulp-jest/badges/coverage.svg)](https://codeclimate.com/github/alansouzati/gulp-jest/coverage)

# [gulp](http://gulpjs.com)-jest

Gulp plugin for the Jest test library

## Installation

```bash
$ npm install gulp-jest jest-cli
```

## Usage

```javascript
var jest = require('gulp-jest').default;

gulp.task('jest', function () {
  return gulp.src('__tests__').pipe(jest({
    "preprocessorIgnorePatterns": [
      "<rootDir>/dist/", "<rootDir>/node_modules/"
    ],
    "automock": false
  }));
});

```

## `process.env.NODE_ENV`

Unlike the `jest` CLI tool, `gulp-jest` does not automatically set `process.env.NODE_ENV` 
to be `test`. If you are using Webpack or Babel, you may need to manually set `process.env.NODE_ENV`
prior to running the task itself.

```javascript
gulp.task('jest', function () {
  process.env.NODE_ENV = 'test';
  
  return gulp.src('__tests__').pipe(jest({
    ...
  }));
});
```

## API

### jest(options)

#### options

as per [Jest config](http://facebook.github.io/jest/docs/configuration.html)

## License

MIT © [Dominic Barker](http://www.dombarker.co.uk)
