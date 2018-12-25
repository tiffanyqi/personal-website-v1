var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    return gulp.src('assets/jade/*')
        .pipe(jade())
        .pipe(gulp.dest('.'))
});
gulp.watch(['assets/jade/*', 'assets/js/*', 'assets/css/*']);
