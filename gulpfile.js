// 1. 引入 gulp
const gulp = require("gulp");

// 2. 引入 gulp-cssmin
const cssmin = require("gulp-cssmin");

// 引入auto-prefixer
const autoprefixer = require("gulp-autoprefixer");

// 2. 创建一个 css 的任务
gulp.task("css", function () {
    return gulp
        .src("./src/css/**") // 对哪些文件进行操作
        .pipe(
            autoprefixer({
                overRideBrowserslist: ["last 2 versions"],
            })
        )
        .pipe(cssmin()) // 都做什么，这里做的就是进行 css 压缩
        .pipe(gulp.dest("./dist/css")); // 把压缩完毕的文件放在 dist 文件夹下的 css 文件夹
});

// // 创建sass任务
var sass = require('gulp-sass')(require('sass'));
gulp.task("sass", function () {
    return gulp
        .src("./src/sass/**")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css/"));
});

// 压缩JS
// const uglify = require("gulp-uglify");
// const babel = require("gulp-babel");
// gulp.task("js", function () {
//     return gulp
//         .src("./src/js/**")
//         .pipe(
//             babel({
//                 presets: ["es2015"],
//             })
//         )
//         .pipe(uglify())
//         .pipe(gulp.dest("./dist/js/"));
// });

// 压缩html
// const htmlmin = require("gulp-htmlmin");
// gulp.task("html", function () {
//     return gulp
//         .src("./src/views/**")
//         .pipe(
//             htmlmin({
//                 removeEmptyAttributes: true,
//                 collapseWhitespace: true,
//             })
//         )
//         .pipe(gulp.dest("./dist/views/"));
// });

// 拷贝lib目录到dist下
// gulp.task("lib", function () {
//     return gulp.src("./src/lib/**")
//     .pipe(gulp.dest("./dist/lib/"));
// });

// // 拷贝图片资源目录到dist下
// gulp.task("images", function () {
//     return gulp.src("./src/images/**")
//     .pipe(gulp.dest("./dist/images/"));
// });

// 拷贝server目录到dist下
gulp.task("server", function () {
    return gulp.src("./src/server/**")
    .pipe(gulp.dest("./dist/server/"));
});

// 执行dist清除任务
const clean = require("gulp-clean");
gulp.task("clean", function () {
    return gulp.src("./dist")
    .pipe(clean());
});

// 打包完成之后自动打开浏览器并去到主页
const webserver = require("gulp-webserver");
gulp.task("webserver", function () {
    return gulp.src("./dist").pipe(
        webserver({
            host: "localhost",
            port: 3000,
            open: "./views/index.html",
            livereload: true,
            // proxies:[
            //     {
            //         source:"/getgoods",
            //         target:"http://localhost/yourshop/server/list.php"
            //     }
            // ],
        })
    );
});

// 实时刷新
const watch = require("gulp-watch");
gulp.task("watch", function () {

    watch("./src/views", () => {
        gulp.series("html")();
    });

    watch("./src/css", () => {
        gulp.series("css")();
    });

    watch("./src/sass", () => {
        gulp.series("sass")();
    });

    // watch("./src/js", () => {
    //     gulp.series("js")();
    // });

    // watch("./src/lib", () => {
    //     gulp.series("lib")();
    // });

    watch("./src/images", () => {
        gulp.series("images")();
    });

    watch("./src/server", () => {
        gulp.series("server")();
    });
});


// 批量执行任务
gulp.task("default", function (done) {
    gulp.series(
        "clean",
        gulp.parallel(
            "css","sass", "js", "images","server",
            // "html",  "lib"
        ),
        gulp.parallel(
            "webserver","watch"
        )       
    )();
    done();
});
