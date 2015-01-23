var gulp = require('gulp');
var config = require('../config').tutorials;
var browserSync  = require('browser-sync');

gulp.task('tutorials', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
