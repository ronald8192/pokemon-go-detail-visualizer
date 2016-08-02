/**
 * Created by ronald8192 on 7/6/16.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var webServer = require('gulp-webserver');
var plumber = require('gulp-plumber');

var Path = {
    ts: 'app/ts',
    js: 'app/js',
    scss: 'app/scss',
    css: 'app/css'
};

for (var item in Path) {
    if (Path.hasOwnProperty(item) && typeof Path[item] === 'string') {
        if (Path[item] === '') {
            throw new Error(item + " path is missing.");
        }
        Path[item] = {
            dir:       Path[item],
            files:     (Path[item].charAt(Path[item].length - 1) == '/' ? Path[item] : Path[item] + '/') + "*." + item,   // 'app/ts' => 'app/ts/*.ts'
            deepFiles: (Path[item].charAt(Path[item].length - 1) == '/' ? Path[item] : Path[item] + '/') + "**/*." + item // 'app/ts' => 'app/ts/**/*.ts'
        }
    }
}

gulp.task('ts', function() {
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject.src()
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .js
        .pipe(sourcemaps.write('.')) // in `Path.js.dir`
        .pipe(gulp.dest(Path.js.dir));
});

gulp.task('sass', function() {
    return gulp.src(Path.scss.deepFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({"bundleExec": true}))
        .pipe(sourcemaps.write('.')) // in `Path.css.dir`
        .pipe(gulp.dest(Path.css.dir));
});

gulp.task('build-assets', ['ts', 'sass']);

gulp.task('watch', ['build-assets'], function() {
    gulp.watch(Path.ts.deepFiles, ['ts']);
    gulp.watch(Path.scss.deepFiles, ['sass']);
});

gulp.task('minify-js', function() {
    return gulp.src(Path.js.deepFiles)
        .pipe(plumber())
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            mangle:true, //mangling names
            // exclude: [],
            // ignoreFiles: []
        }))
        .pipe(gulp.dest(Path.js.dir + '-min'));
});

gulp.task('minify-css', function() {
    return gulp.src(Path.css.deepFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(Path.css.dir + '-min'));
});

gulp.task('minify', ['minify-js', 'minify-css']);

gulp.task('build', function(done) {
    return runSequence(
        'build-assets',
        'minify',
        done
    )
});


gulp.task('webServer', function(){
    return gulp.src('./')
        .pipe(webServer({
            livereload: {
                enable: true,
                filter: function(fileName) {
                    return !fileName.match(/.map$/); // exclude all source maps from livereload
                }
            },
            directoryListing: true,
            open: true,
            port: 8000
        }));
});

gulp.task('start', ['watch', 'webServer']);

gulp.task('default', ['build']);