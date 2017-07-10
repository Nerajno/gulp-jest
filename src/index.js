import jest from 'jest-cli';
import gutil from 'gulp-util';
import through2 from 'through2';
import defaultsDeep from 'lodash.defaultsdeep';

export default (defaultOptions = {}) => {
  return through2.obj((file, enc, cb) => {
    // Allow for '__tests__' to just use current cwd.
    let options = defaultsDeep({}, { config: {
      rootDir: file && !file.path.match(/.*__tests__/i) ? file.path : undefined
    }}, defaultOptions);

    jest.runCLI(options, [options.config.rootDir], (result) => {
      if(result.numFailedTests || result.numFailedTestSuites) {
        cb(new gutil.PluginError('gulp-jest', { message: 'Tests Failed' }));
      } else {
        cb();
      }
    });
  })
};
