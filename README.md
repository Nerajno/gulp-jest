[![Build Status](https://travis-ci.org/Dakuan/gulp-jest.svg?branch=master)](https://travis-ci.org/Dakuan/gulp-jest)

# [gulp](http://gulpjs.com)-jest

Gulp plugin for the Jest test library 


## Installation

As this plugin isn't quite ready it's not been published to NPM, so we need to install from github.

Add to `package.json`

``` json
"gulp-jest": "git+https://github.com/Dakuan/gulp-jest"
```


## Usage

``` javascript
var jest = require('gulp-jest');

gulp.task('jest', function () {
    return gulp.src('client/js/app.js').pipe(jest({
        rootDir: __dirname,
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
