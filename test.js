'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var jest = require('./index');
var through2 = require('through2');
var out = process.stdout.write.bind(process.stdout);

it('should run unit test and pass', function (cb) {
    var stream = jest({
        rootDir: __dirname
    });

    process.stdout.write = function (str) {
        out(str);
        if (/test passed/.test(str)) {
            assert(true);
            process.stdout.write = out;
            cb();
        }
    };

    stream.write(new gutil.File({
        path: '__tests__/fixture.js',
        contents: new Buffer('')
    }));

    stream.end();
});
