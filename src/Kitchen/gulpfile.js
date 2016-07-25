/// <binding BeforeBuild='clean' AfterBuild='copy' Clean='clean' />
var gulp = require('gulp');
var del = require('del');

gulp.task('copy', function(){
    gulp.src("src/**/*.html")
    .pipe(gulp.dest("wwwroot/dist"));


});

gulp.task('clean', function () {
    del("wwwroot/dist/**/*");
})