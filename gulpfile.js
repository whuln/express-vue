const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

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

gulp.task('start', function () {
    plugins.nodemon({
      script: './server/server.js'    
    , env: { 'NODE_ENV': 'development' }
    })
  })