var gulp = require('gulp'),
  assign = require('lodash.assign'),
  autoprefixer = require('gulp-autoprefixer'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  fs = require('fs'),
  gifsicle = require('imagemin-gifsicle'),
  gutil = require('gulp-util'),
  imagemin = require('gulp-imagemin'),
  jpegtran = require('imagemin-jpegtran'),
  less = require('gulp-less'),
  minifyCss = require('gulp-minify-css'),
  mocha = require('gulp-mocha'),
  optipng = require('imagemin-optipng'),
  path = require('path'),
  plumber = require('gulp-plumber'),
  pngquant = require('imagemin-pngquant'),
  reload = browserSync.reload,
  runSequence = require('run-sequence'),
  s3 = require("gulp-s3"),
  source = require('vinyl-source-stream'),
  sourcemaps = require('gulp-sourcemaps'),
  svgo = require('imagemin-svgo'),
  uglify = require('gulp-uglify'),
  watchify = require('watchify');

var buildDirectory = './public/js';


gulp.task('mocha', function() {
  return gulp.src(['test/*.js'], {
    read: false
  })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', gutil.log);
});



// add custom browserify options here
var customOpts = {
  entries: ['./jsx/browser.jsx'],
  debug: true,
  extensions: ['.js', '.es6.js', '.jsx'],
  transform: ['babelify']
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));


gulp.task('jsx', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({
      loadMaps: true
    })) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    // .pipe(uglify())
    .pipe(sourcemaps.write()) // writes .map file
    .pipe(gulp.dest(buildDirectory));
}

gulp.task('compress', function() {
  return gulp.src(buildDirectory + '/*.js')
    .pipe(sourcemaps.init({
      loadMaps: true
    })) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    // .pipe(uglify())
    .pipe(sourcemaps.write()) // writes .map file

    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(gulp.dest(buildDirectory));
});


gulp.task('images', function() {
  return gulp.src('images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      optimizationLevel: 7,
      use: [pngquant(), gifsicle(), jpegtran(), optipng(), svgo()]
    }))
    .pipe(gulp.dest(buildDirectory + '/images'));
});

gulp.task('styles', function() {
  return gulp.src('./less/app.less')
    .pipe(plumber())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .on('error', gutil.log)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(minifyCss({
      compatibility: 'ie8',
      debug: true
    }))
    .pipe(gulp.dest(buildDirectory + '/styles/'));

});


gulp.task('dev', ['styles', 'images'], function() {
  gulp.watch(['./jsx/**/*.jsx'], ['jsx']);
  gulp.watch(['./less/**/*.less'], ['styles', 'images']);
  gulp.watch(['./test/**/*.js'], ['mocha']);
});



gulp.task('build', ['jsx'], function(callback) {
  runSequence('compress', ['images', 'styles'], ['deploy_styles', 'deploy_scripts'], callback);
});
