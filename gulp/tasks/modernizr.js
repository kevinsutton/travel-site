var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var del = require('del');

gulp.task('beginModernizrClean', function () {
    // return del(['./app/temp/scripts/modernizr.js', './app/assets/scripts/vendor/modernizr.js']);
});

gulp.task('createModernizr', ['beginModernizrClean'], function() {
    console.log('Starting Creation....');
    return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
        .pipe(modernizr({
            "options": [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest('./app/temp/scripts'));
});

gulp.task('copyModernizr', ['createModernizr'], function () {
    return gulp.src('./app/temp/scripts/modernizr.js')
        .pipe(gulp.dest('./app/assets/scripts/vendor/'));
});

gulp.task('modernizr', ['beginModernizrClean', 'createModernizr', 'copyModernizr']);