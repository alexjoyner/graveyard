var gulp = require('gulp');
var uglify = require('gulp-uglify');
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
var dev_scss = 'dev/client/scss/';
var dev_tpl = 'dev/client/templates/';
var dev_ts = 'dev/client/ts/';
var dev_index = 'dev/client/index.html';
var dev_server_folder = 'dev/server/';
var dev_server_js = 'dev/server.js';
var dev_imgs = 'dev/client/assets/img/';

//  ******** PRE DISTRIBUTION FILES ********
// ------------------------------------------
var dist_libs = 'dist/client/libs/'; // Distribution library files
var dist_fonts = 'dist/client/fonts/';
var dist_css = 'dist/client/styles/';
var dist_ts = 'dist/client/scripts/';
var dist_tpl = 'dist/client/templates/';
var dist_server_folder = 'dist/server/';
var dist_base = 'dist/';
var dist_client_base = 'dist/client/';

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [  // ***** Lib dependencies from index.html
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
    var templates = gulp.src(dev_tpl + '**/*.html')
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
    gulp.src(dev_scss + '*.scss')
        .pipe(compass({
            css: dist_css,
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
    return gulp.src(dev_imgs + '**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('watch', function() {
    gulp.watch(dev_ts + '**/*.ts', ['build-js']);
    gulp.watch(dev_scss + '**/*.scss', ['build-css']);
    gulp.watch(dev_tpl + '**/*.html', ['build-html']);
    gulp.watch(dev_index, ['build-html']);
    gulp.watch(dev_server_js, ['build-server']);
    //gulp.watch(dev_imgs + '*', ['build-img']);
});
gulp.task('default', ['watch', 'build-js', 'build-css', 'build-html', 'build-libs']);
