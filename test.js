'use strict';
var assert = require('assert');
var gulp = require('gulp')
var gutil = require('gulp-util');
var jest = require('./index');
var through2 = require('through2');
var out = process.stdout.write.bind(process.stdout);

describe('gulp-jest', function () {
    it('should use the scream path as the rootDir', function (cb) {
        var stream = gulp.src('__tests__')
            .pipe(jest());

        process.stdout.write = function (str) {
            out(str);
            if (/test passed/.test(str)) {
                assert(true);
                process.stdout.write = out;
                cb();
            }
        };
    });
});
