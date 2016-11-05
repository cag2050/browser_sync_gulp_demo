/**
 * Created by cag on 2016/11/5.
 */
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
// 静态服务器
gulp.task("browser-sync", function () {
    browserSync.init({
        files: "./src/html/*.html,./src/css/*.css", // 监控的文件
        server: {
            baseDir: "./src" // 访问根路径
        }
    })
});

gulp.task("default", ["browser-sync"]);