/**
 * Created by cag on 2016/11/5.
 */
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
// ?????
gulp.task("browser-sync", function () {
    browserSync.init({
        files: "./src/html/*.html,./src/css/*.css,./src/js/*.js,./src/*.*", // ?????
        server: {
            baseDir: "./src" // ?????????index.html,??????????????????
        }
    })
});

gulp.task("default", ["browser-sync"]);