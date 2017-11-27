const gulp   = require('gulp');
const pug    = require('gulp-pug');
const sass   = require('gulp-sass');
const babel  = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump   = require('pump');

const dest  = './docs';
const where = {
	pug:  './src/*.pug',
	sass: './src/style/*.sass',
	js:   './src/js/*.js'
}

gulp.task('pug', () => {
	pump([
		gulp.src(where.pug),
		pug(),
		gulp.dest(dest)
	]);
});

gulp.task('sass', () => {
	pump([
		gulp.src(where.sass),
		sass({ includePaths: [where.sass], outputStyle: 'compressed' }),
		concat('style.css'),
		gulp.dest(dest)
	]);
});

gulp.task('compress', (cb) => {
	pump([
		gulp.src(where.js),
		babel({ presets: ['es2015'] }),
		uglify(),
		concat('main.js'),
		gulp.dest(dest)
	], cb);
});

gulp.task('magic', ['pug', 'sass', 'compress']);