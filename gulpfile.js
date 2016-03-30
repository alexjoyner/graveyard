var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
/* SCSS */
var compass = require('gulp-compass');
/* Images */
var imagemin = require('gulp-imagemin');
/* Typescript*/
var tsProject = typescript.createProject('tsconfig.json');


//  ******** DEVELOPMENT FILES ********
// -------------------------------------
var dev_scss = 'dev/client/scss';
var dev_tpl = 'dev/client/templates/**/*.html';
var dev_ts = 'dev/client/ts';
var dev_index = 'dev/client/index.html';
var dev_server_folder = 'dev/server';
var dev_server_js = 'dev/server.js';

//  ******** PRE DISTRIBUTION FILES ********
// ------------------------------------------
var dist_libs = 'dist/client/libs'; // Distribution library files
var dist_fonts = 'dist/fonts';
var dist_css = 'dist/client/styles';
var dist_ts = 'dist/client/scripts';
var dist_tpl = 'dist/client/templates';
var dist_server_folder = 'dist/server';
var dist_server_js = 'dist/server.js';
var dist_client_base = 'dist/client/';

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.js'
] 

gulp.task('build-libs', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest(dist_libs));
    return [copyJsNPMDependencies];
});

gulp.task('build-html', function() {
    var templates = gulp.src(dev_tpl)
        .pipe(gulp.dest(dist_tpl));
    var index_html = gulp.src(dev_index)
        .pipe(gulp.dest(dist_client_base));

    return [templates, index_html];
});

gulp.task('build-css', function() {
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest(dist_fonts + '/bootstrap'));
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest(dist_fonts));
    gulp.src(dev_scss + '/*.scss')
        .pipe(compass({
            sass: dev_scss
        }))
        .pipe(gulp.dest(dist_css));
});

gulp.task('build-js', function() {
    return gulp.src(dev_ts + '/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(dist_ts));
});

gulp.task('build-img', function() {
    return gulp.src(assetsDev + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('watch', function() {
    gulp.watch(appDev + '**/*.ts', ['build-js']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'img/*', ['build-img']);
});

gulp.task('default', ['watch', 'build-js', 'build-css']);