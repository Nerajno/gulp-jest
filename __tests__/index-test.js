import gulp from 'gulp';
import jest from '../src/index';

it('should pass a test', (done) => {
  gulp.src('__tests__')
    .pipe(jest({
      rootDir: process.cwd(),
      testEnvironment: 'node',
      testRegex: 'fixture-pass.*-test.js'
    }))
    .on('error', (error) => {
      fail('Test should not fail', error);
      done();
    })
    .on('finish', () => done());
});

it('should fail a test', (done) => {
  let failed = false;
  gulp.src('__tests__')
    .pipe(jest({
      rootDir: process.cwd(),
      testEnvironment: 'node',
      testRegex: 'fixture-fail.*-test.js'
    }))
    .on('error', () => {
      failed = true;
    })
    .on('finish', () => {
      if (!failed) {
        fail('Test should fail');
      }
      done();
    });
});
