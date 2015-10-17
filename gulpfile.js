var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var paths = {
    js: {
        files:        'js/**/*.js',
        main:         'js/components/main.js',
        compileTo:    'dist',
        compiledFile: 'app.build.js'
    }
};

gulp.task('scripts', function() {
    return browserify('./js/components/main')
    .transform(babelify)
    .bundle()
    .on('error', function (err) {
        console.log(err.toString());
        this.emit("end");
    })
    .pipe(source(paths.js.compiledFile))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.compileTo));
});

gulp.task('watch', function() {
    gulp.watch(paths.js.files, ['scripts']);
});

gulp.task('default', ['scripts']);