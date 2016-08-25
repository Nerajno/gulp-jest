'use strict';

var jest = require('jest-cli'),
    gutil = require('gulp-util'),
    through = require('through2');

module.exports = function (options) {
    options = options || {};
    return through.obj(function (file, enc, cb) {
        options.rootDir = options.rootDir || file.path;
        var watch = options.watch ? options.watch : undefined;
        delete options.watch;
        jest.runCLI({
            config: options
        }, options.rootDir, function (success) {
            if(!success && !watch) {
                cb(new gutil.PluginError('gulp-jest', { message: "Tests Failed" }));
            } else {
                cb();
            }
        }.bind(this));
    });
};
