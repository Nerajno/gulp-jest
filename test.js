'use strict';
var assert = require('assert');
var gulp = require('gulp')
var gutil = require('gulp-util');
var jest = require('./index');
var through2 = require('through2');
var out = process.stdout.write.bind(process.stdout);

it('should take a rootDir as an option', function () {
    var stream = jest({
        rootDir: '__tests__'
    });

    stream.write();

    stream.end();
});


it('should use the stream path as the rootDir', function () {
    gulp.src('__tests__')
        .pipe(jest());
});

it('should support coverage option', function () {
    gulp.src('__tests__')
        .pipe(jest({
          collectCoverage: true
        }));
});
