var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugin = gulpLoadPlugins();

gulp.task('js', function () {
  gulp.src('srcjs/es6.js')
    .pipe()
    .pipe()
    .pipe(gulp.dest('destjs'));
});