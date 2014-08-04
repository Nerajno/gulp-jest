'use strict';

var jest = require('jest-cli'),
    gutil = require('gulp-util'),
    through = require('through2');

module.exports = function (options) {
    options = options || {};
    return through.obj(function (file, enc, cb) {
        try {
            jest.runCLI({
                config: options
            }, options.rootDir, function () {
                cb();
            }.bind(this));
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-jest', err));
            cb();
        }
    });
};
