#gulp-jest

Gulp plugin for the Jest test lib


###Installation

`npm install gulp-jest --save-dev`

### Usage

``` javascript

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

