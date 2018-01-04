const gulp    = require('gulp');
const pug     = require('gulp-pug');
const sass    = require('gulp-sass');
const babel   = require('gulp-babel');
const concat  = require('gulp-concat');
const uglify  = require('gulp-uglify');
const watch   = require('gulp-watch');
const postcss = require('gulp-postcss')
const pump    = require('pump');
const prefix  = require('autoprefixer')

const dest  = './docs';
const where = {
	pug:  './src_new/*.pug',
	sass: './src_new/style/*.sass',
	js:   './src_new/js/*.js'
}

gulp.task('pug', (cb) => {
	pump([
		gulp.src(where.pug),
		pug(),
		gulp.dest(dest)
	], cb);
});

gulp.task('sass', (cb) => {
	pump([
		gulp.src(where.sass),
		sass({ includePaths: [where.sass], outputStyle: 'compressed' }),
		postcss([ prefix() ]),
		concat('style.css'),
		gulp.dest(dest)
	], cb);
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

gulp.task('watch', () => {
	gulp.task('magic'),
	gulp.watch(where.pug,  ['pug']),
	gulp.watch(where.sass, ['sass']),
	gulp.watch(where.js,  ['compress'])
});

gulp.task('magic', ['pug', 'sass', 'compress']);
