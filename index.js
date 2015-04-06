'use strict';

var jest = require('jest-cli'),
    gutil = require('gulp-util'),
    through = require('through2');

module.exports = function (options) {
    options = options || {};
    return through.obj(function (file, enc, cb) {
        var args = {};
        if(file.isDirectory()) {
          options.rootDir = options.rootDir || file.path;
        } else {
          options.rootDir = options.rootDir;
          args._ = [file.path];
        }
        args.config = options;
        jest.runCLI(args, options.rootDir, function (success) {
            if(!success) {
                cb(new gutil.PluginError('gulp-jest', { message: "Tests Failed" }));
            } else {
                cb();
            }
        }.bind(this));
    });
};
