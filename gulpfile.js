/**
 * @file
 * Gulpfile for compiling Sass.
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();

function style() {
	return gulp
	.src('./scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
	.pipe(gulp.dest('./css'))
  .pipe(browsersync.stream());
}

function watch() {
	browsersync.init({
    proxy: 'http://website.local'
  });
	gulp.watch('scss/**/*.scss', style);
	gulp.watch('js/**/*.js').on('change', browsersync.reload);
	gulp.watch('*.theme').on('change', browsersync.reload);
	gulp.watch('templates/**/*.twig').on('change', browsersync.reload);
}

exports.style = style;
exports.watch = watch;
