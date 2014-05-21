try {

  // Gulp plugins
  var gulp      = require('gulp');
  var less      = require('gulp-less');
  var cssmin    = require('gulp-minify-css');
  var debug     = require('gulp-debug');
  var rename    = require('gulp-rename');

  // utilities
  var path      = require('path');

} catch (e) {

  console.log(e.toString());
  console.log('Please run `npm install`\n');
  process.exit(1);

}

var assetSrcPath = "./";

var paths = {
  less : './less/bootstrap.less',
  css  : './css/'
};

gulp.task('styles', function() {
  return gulp.src(paths.less, {cwd: './'})
    /*.pipe(debug({verbose:false}))*/
    .pipe(less())
    /*.pipe(debug({verbose:false}))*/
    .pipe(gulp.dest(paths.css)) /* SAVES THE UNMINIFIED VERSION */
    /*.pipe(debug({verbose:false}))*/
    .pipe(cssmin())
    /*.pipe(debug({verbose:false}))*/
    .pipe(rename(({suffix: '.min'})))
    /*.pipe(debug({verbose:false}))*/
    .pipe(gulp.dest(paths.css)); /* SAVES THE MIN VERSION */
});


gulp.task('watch', function() {
  gulp.watch(paths.less, ['styles']);
});

gulp.task('default', ['watch']);