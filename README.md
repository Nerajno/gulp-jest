[![Build Status](https://travis-ci.org/Dakuan/gulp-jest.svg?branch=master)](https://travis-ci.org/Dakuan/gulp-jest)

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
        scriptPreprocessor: "./spec/support/preprocessor.js",
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testDirectoryName: "spec",
        testPathIgnorePatterns: [
            "node_modules",
            "spec/support"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});

```


## API

### jest(options)

#### options

as per [Jest config](http://facebook.github.io/jest/docs/api.html#config-options)


## License

MIT © [Dominic Barker](http://www.dombarker.co.uk)
