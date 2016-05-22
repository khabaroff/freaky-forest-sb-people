'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        html: '../'
    },
    src: {
        html: '../templates/*.html'
    },
    watch: {
        html: '../templates/*.html'
    }
};

var config = {
    server: {
        baseDir: "../",
        index: "index.html"
    },
    tunnel: true,
    host: 'localhost',
    port: 8000,
    logPrefix: "Frontend"
};

gulp.task('webserver', function () {
    browserSync(config)
});



gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});



gulp.task('build', [
    'html:build'
]);


gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);