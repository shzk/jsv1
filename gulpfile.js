var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var less         = require('gulp-less');
var concatCss    = require('gulp-concat-css');


// Запускаем сервер + отслеживаем sass/html файлы
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./src",
        notify: false
    });

    gulp.watch("src/less/**/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Компилируем sass в CSS и вставляем изменения в браузер
gulp.task('less', function() {
    return gulp.src("src/less/**/*.less")
        .pipe(less())
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

/*// Выгружаем все файлы через FTP на хостинг
gulp.task('ftp', function () {
return gulp.src('src/**')
.pipe(ftp({
    host: '',
    user: '',
    pass: '',
    remotePath: '/'
}))
.pipe(gutil.noop());
});
*/
gulp.task('default', ['serve']);