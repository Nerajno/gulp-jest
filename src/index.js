import jest from 'jest-cli';
import PluginError from 'plugin-error';
import through2 from 'through2';

export default (options = {}) => {
  return through2.obj((file, enc, cb) => {
    options = Object.assign({
      rootDir: file ? process.cwd() : undefined
    }, options);

    jest.runCLI(options, [options.rootDir]).then(({ results }) => {
      if(results.numFailedTests || results.numFailedTestSuites) {
        cb(new PluginError('gulp-jest', { message: 'Tests Failed' }));
      } else {
        cb();
      }
    });
  });
};
