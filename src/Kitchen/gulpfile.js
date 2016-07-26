/// <binding AfterBuild='copy' Clean='clean' />
var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');

var project = ts.createProject('tsconfig.json');


gulp.task('copy-html', function(){
    gulp.src("src/**/*.html")
    .pipe(gulp.dest("wwwroot/dist"))
  
});

gulp.task('copy-css', function () {
    gulp.src('styles/**/*.css')
    .pipe(gulp.dest("wwwroot/css"));
})

gulp.task('clean', function () {
    del("wwwroot/dist/**/*");
})

gulp.task('scripts', function () {
    return project.src()
    .pipe(ts(project))
    .js.pipe(gulp.dest('wwwroot/dist'))
})

gulp.task('copy', ['clean', 'scripts','copy-css', 'copy-html']);


