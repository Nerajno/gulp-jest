import gulp from 'gulp';
import jest from '../src/index';

it('should pass a test', (done) => {
  gulp.src('__tests__')
    .pipe(jest({
      config: {
        rootDir: process.cwd(),
        testEnvironment: 'node',
        testRegex: 'fixture-pass.*-test.js'
      }
    }))
    .on('error', (error) => {
      fail('Test should not fail', error);
      done();
    })
    .on('finish', () => done());
});

it('should pass a test passed from gulp', (done) => {
  gulp.src('fixture-pass/*-test.js')
    .pipe(jest())
    .on('error', (error) => {
      fail('Test should not fail', error);
      done();
    })
    .on('finish', () => done());
});

it('should fail a test', (done) => {
  gulp.src('__tests__')
    .pipe(jest({
      config: {
        rootDir: process.cwd(),
        testEnvironment: 'node',
        testRegex: 'fixture-fail.*-test.js'
      }
    }))
    .on('error', () => done())
    .on('finish', () => {
      fail('Test should fail');
      done();
    });
});
