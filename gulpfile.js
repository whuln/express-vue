const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

var serverjs = {
    paths: ['server/es6/*.js', 'server/es6/**/*.js'],
    destlib: 'server'
};
gulp.task('build-es6', () => {
    return gulp.src(serverjs.paths)
        .pipe(plugins.babel({
            "presets": ["env"],
            "plugins": ["transform-runtime", "transform-object-rest-spread"]
        }))
        .pipe(gulp.dest(serverjs.destlib));

});