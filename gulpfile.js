var gulp = require('gulp'),
watch= require('gulp-watch');

gulp.task('default', function(){
    console.log("probaa");
});

gulp.task('html', function(){
  console.log("Imagine smth useful being done to your html here")
});

gulp.task('styles', function(){
    console.log("Imagine sass or postcss task running here")
  });

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    })
  });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });