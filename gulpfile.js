var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    lesshint = require('gulp-lesshint'),
    jslint = require('gulp-jslint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

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

gulp.task('less-hint', function() {
    return gulp.src('./__dev/less/sections/*.less')
        .pipe(lesshint({
            // Options
        }))
        .pipe(lesshint.reporter()) // Leave empty to use the default, "stylish"
        .pipe(lesshint.failOnError()); // Use this to fail the task on lint errors
});

gulp.task('js-lint', function () {
    return gulp.src(['./__dev/scripts/components/*.js'])
        .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
        .pipe(jslint.reporter('default'));
});

gulp.task('build-js', function() {
    return gulp.src([
        "__dev/scripts/libs/jquery-1.11.1.min.js",
        "__dev/scripts/libs/respond.min.js",
        "__dev/scripts/libs/fastclick.js",
        "__dev/scripts/libs/owl/owl.carousel.min.js",
        "__dev/scripts/libs/_jquery.scrolllock.js",
        "__dev/scripts/libs/instafeed.min.js",
        "__dev/scripts/libs/layzr.js",
        "__dev/scripts/libs/_jquery.autocompleter.shoporama-custom.js",
        "__dev/scripts/bootstrap/_tooltip.js",
        "__dev/scripts/components/_massachusetts.general.js",
        "__dev/scripts/components/_massachusetts.navigation.js",
        "__dev/scripts/components/_massachusetts.instafeed.js",
        "__dev/scripts/components/_massachusetts.brandslider.js",
        "__dev/scripts/components/_massachusetts.cookiepolicy.js",
        "__dev/scripts/components/_massachusetts.checkoutflow.js",
        "__dev/scripts/components/_massachusetts.validator.js",
        "__dev/scripts/components/_massachusetts.suggestivesearch.js",
        "__dev/scripts/components/_massachusetts.newsletterpopup.js",
        "__dev/scripts/scripts.js"
    ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

gulp.task('default', ['less', 'watch']);
