# [gulp](http://gulpjs.com)-jest

Gulp plugin for the Jest test library 


## Installation

``` sh
$ npm install gulp-jest --save-dev`
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

