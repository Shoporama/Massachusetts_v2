var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

gulp.task('watch', function () {
    gulp.watch([ './__dev/less/styles.less', './__dev/less/theme-styling.less' ], ['less']);
});

gulp.task('less', function () {
    gulp.src([ './__dev/less/styles.less', './__dev/less/theme-styling.less' ])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('default', ['less', 'watch']);
