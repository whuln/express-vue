const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const webpack = require('webpack');

let wpConfig = require('./build/webpack.config.dev');

var serverjs = {
    es6_paths: ['server/es6/*.js', 'server/es6/**/*.js'],
    coffee_paths: ['server/es6/*.coffee', 'server/es6/**/*.coffee'],
    destlib: 'server'
};
gulp.task('build-es6', () => {
    return gulp.src(serverjs.es6_paths)
        .pipe(plugins.babel({
            "presets": ["env"],
            "plugins": ["transform-runtime", "transform-object-rest-spread"]
        }))
        .pipe(gulp.dest(serverjs.destlib));

});

gulp.task('build-coff', () => {
    return gulp.src(serverjs.coffee_paths)
        .pipe(plugins.coffee())
        .pipe(gulp.dest(serverjs.destlib));

});

gulp.task('webpack', function() {
    webpack(wpConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.log("err" + err);
        }
        console.log("webpack done!");
    });
});

gulp.task('watch', function() {
    gulp.watch(serverjs.es6_paths, ['build-es6']);
    gulp.watch(serverjs.coffee_paths, ['build-coff']);
    gulp.watch('./client/*', ['webpack']);
});

gulp.task('start', function() {
    plugins.nodemon({
        script: './server/server.js',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('default', ['build-es6', 'build-coff', 'webpack', 'watch', 'start']);