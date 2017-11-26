import jest from 'jest-cli';
import gutil from 'gulp-util';
import through2 from 'through2';

export default (options = {}) => {
  return through2.obj((file, enc, cb) => {
    options = Object.assign({
      rootDir: file ? file.path : undefined
    }, options);

    jest.runCLI(options, [options.rootDir]).then(({ results }) => {
      var hasCoverage = _ref.globalConfig.collectCoverage;
      var hasThreshold = _ref.globalConfig.coverageThreshold || false;

      if (results.numFailedTests || results.numFailedTestSuites) {
        cb(new _gulpUtil2.default.PluginError('gulp-jest', { message: 'Tests Failed' }));
      } else if(hasCoverage && hasThreshold && !results.success) { 
        cb(new _gulpUtil2.default.PluginError('gulp-jest', { message: 'Coverage threshold failed'}));
      } else {
        cb();
      }
    });
  });
};
