var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest('.'))
});
gulp.watch(['*.jade', 'js/*', 'css/*']);