'use strict';

//  Main
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

//  Filesystem
const rename = require('gulp-rename');
const del = require('del');

//  SCSS
const scss = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

//  SERVER
const browserSync = require('browser-sync').create();
const liveServerConfig = {
  server: {
    baseDir: './build'
  },
  tunnel: false,
  host: `localhost`,
  port: 9090,
  logPrefix: `Frontend_DevilDante`,
  reloadDelay: 100
};

//  PATHS
const paths = {
  src: {
    scssMain: 'src/scss/main.scss',
    scss: 'src/scss/**/*.scss',
    htmlMain: 'src/index.html',
    html: 'src/*.html'
  },
  dest: {
    base: 'build/',
    css: 'build/assets/css/',
    html: 'build/'
  }
};

function clean(cb) {
  del(paths.dest.base);
  cb();
}

function copy(cb) {
  gulp.src(paths.src.htmlMain)
    .pipe(gulp.dest(paths.dest.html))
    .pipe(browserSync.stream());
  cb();
}

function buildStyles(cb) {
  gulp.src(paths.src.scssMain)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss({includePaths: ['node_modules/normalize.css']}).on('error', scss.logError))
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browserSync.stream());
  cb();
}

function startLiveServer(cb) {
  browserSync.init(liveServerConfig);
  cb();
}

function watch (cb) {
  gulp.watch(paths.src.html, copy);
  gulp.watch(paths.src.scss, buildStyles);
  cb();
}

exports.clean = clean;
exports.copy = copy;
exports.buildStyles = buildStyles;
exports.watch = watch;

exports.build = gulp.parallel(copy, buildStyles);
exports.start = gulp.series(gulp.parallel(copy, buildStyles), startLiveServer, watch);
