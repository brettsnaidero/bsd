// Include dependencies
var gulp = require('gulp');;
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

// SVG Icons
gulp.task('sprite', function () {
    gulp.src('./svg/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('./'))
});
