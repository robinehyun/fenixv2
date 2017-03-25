var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('app/assets/scss/**.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function(){
    watch('app/assets/scss/**.scss', function(){
      gulp.start('sass');
    })
});

gulp.task('serve', function(){

  browserSync.init({
    server: {
      baseDir: './app'
    }
  });

  gulp.watch('app/assets/scss/**.scss', ['sass']);
  // gulp.watch()
})

gulp.task('default', ['watch']);
