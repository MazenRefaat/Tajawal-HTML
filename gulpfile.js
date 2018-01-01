var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imageMin = require('gulp-imagemin');
var runSequence = require('run-sequence');

// Sass to css precompiling
gulp.task('sass', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
        .pipe(browserSync.reload({
            stream: true
        }
    ));
});

// Sass live watch
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('./src/scss/style.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
});

// Browser live update
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

// Fonts copying 
gulp.task('fonts', function() {
    return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
});

// JS & CSS files concatination + minifying
gulp.task('useref', function () {
    return gulp.src('./src/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('./'));
});

// Images Minifying 
gulp.task('imagesMin', function(){ 
    return gulp.src('src/img/*.+(jpg|png|svg)')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/img'));
});

// Run App 
gulp.task('run', function(){
  runSequence('sass','useref','fonts','imagesMin', 'watch');  
});