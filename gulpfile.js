var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugin = gulpLoadPlugins();

//babel + rename 综合 基本用法
gulp.task('js', function () {
  gulp.src('srcjs/es6.js')
    .pipe(plugin.babel({
      presets: ['es2015']
    }))
    .pipe(plugin.rename({
        //dirname:'js/abc',
        basename: 'es6.transfer',
        //prefix:'bons-',
        //suffix:'-hola',
        extname: '.js'
      }
    ))
    .pipe(gulp.dest('destjs'));
  //the inalName is : destjs/js/abc/bons-es6.transfer-hola.js
});