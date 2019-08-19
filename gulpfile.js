const gulp = require('gulp');
const less = require('gulp-sass');
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

const paths = {
	styles: {
		src: 'src/styles/**/*.scss',
		dest: 'dist/styles/'
	}
};

function clean() {
	return del([ 'assets' ]);
}

function styles() {
	return gulp.src(paths.styles.src)
		.pipe(less())
		.pipe(postcss([autoprefixer()]))
		.pipe(cleanCSS())
		.pipe(rename({
			basename: 'main',
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.styles.dest))
}

function watch() {
	gulp.watch(paths.styles.src, styles);
}

var build = gulp.series(clean, gulp.parallel(styles));

exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;

exports.default = build;