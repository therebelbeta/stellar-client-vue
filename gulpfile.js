var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var assetList = [
  'src/fonts/**/*.*',
  'src/img/**/*.*',
  'src/misc/**/*.*'
];

gulp.task('sass', function() {
  gulp.src('./src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/'))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('moveIndex', function() {
  gulp.src('src/html/index.html')
    .pipe(gulp.dest('./build/'));
});

gulp.task('moveAssets', function() {
  gulp.src(assetList, {
    base: './src'
  })
    .pipe(gulp.dest('./build/'));
});

gulp.task('browserify', function() {
  return browserify('./src/js/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['moveIndex', 'moveAssets', 'sass', 'browserify']);