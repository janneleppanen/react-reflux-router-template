var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var addsrc      = require('gulp-add-src');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

var paths = {
    js: {
        files:        'js/**/*.js',
        main:         'js/components/main.js',
        compileTo:    'dist',
        compiledFile: 'app.build.js',
        src:    [
            'bower_components/react/react.js',
            'bower_components/react/react-dom.js',
            'bower_components/reflux/dist/reflux.js',
            'js/actions.js',
            'js/store.js'
        ]
    }
};

gulp.task('scripts', function() {
    var bundleStream = browserify(paths.js.main)
        .transform(babelify)
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(source('bundled.js'))
        .pipe(buffer());  

    return bundleStream
        .pipe(addsrc.prepend(paths.js.src))
        .pipe(concat(paths.js.compiledFile))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.compileTo));
});

gulp.task('compress.js', function() {
    var src = paths.js.compileTo + '/' + paths.js.compiledFile;
    
    return gulp.src(src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.compileTo));
})

gulp.task('watch', function() {
    gulp.watch(paths.js.files, ['scripts']);
});

gulp.task('default', ['scripts']);