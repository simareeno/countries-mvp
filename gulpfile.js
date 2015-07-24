var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var AutoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new AutoPrefixPlugin({
	browsers: ['last 2 versions', 'opera >= 12']
});

gulp.task('styles', function () {
  return gulp.src('./*.less')
    .pipe(plumber())
    .pipe(less({
			plugins: [autoprefix]
		}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
  return gulp.src('./img/**/*')
  .pipe(gulp.dest('./dist/img/'));
});

gulp.task('html', function () {
  return gulp.src('./*.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function () {
  return gulp.src('./*.js')
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
  watch('./*.less', function() {
		gulp.start('styles');
	});
});


gulp.task('default', ['images', 'styles', 'html', 'scripts']);
