const { runCLI } = require('@jest/core');
import PluginError from 'plugin-error';
import through2 from 'through2';

export default (options = {}) => {
  return through2.obj((file, enc, cb) => {
    options = Object.assign({
      rootDir: file ? process.cwd() : undefined
    }, options);

    runCLI(options, [options.rootDir]).then(({ results }) => {
      if(results.numFailedTests || results.numFailedTestSuites) {
        cb(new PluginError('gulp-jest', { message: 'Tests Failed' }));
      } else if (typeof results.success !== 'undefined' && !results.success){
        cb(new PluginError('gulp-jest', { message: 'Tests Failed due to coverage threshold breaches' }));
      } else {
        cb();
      }
    });
  });
};
