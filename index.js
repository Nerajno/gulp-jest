'use strict';

var jest = require('jest-cli'),
    gutil = require('gulp-util'),
    through = require('through2');

module.exports = function (options, cliArgs) {
    options = options || {};
    var args = cliArgs || {};
    args.config = options;

    return through.obj(function (file, enc, cb) {
        options.rootDir = options.rootDir || file.path;
        jest.runCLI(args, options.rootDir, function (success) {
            if(!success) {
                cb(new gutil.PluginError('gulp-jest', { message: "Tests Failed" }));
            } else {
                cb();
            }
        }.bind(this));
    });
};
