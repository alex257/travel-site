var gulp = require('gulp'),
watch = require('gulp-watch'),
sass = require('gulp-sass');

gulp.task('default', function(){
    console.log("probaa");
});

gulp.task('html', function(){
  console.log("Imagine smth useful being done to your html here")
});

gulp.task('sass', function(){
    return gulp.src('./app/assets/styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
  });

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    })
  });
    watch('./app/assets/styles/**/*.sass', function(){
        gulp.start('sass');
  });