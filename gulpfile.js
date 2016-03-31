var gulp = require('gulp');
var gulps = require('gulp-series');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');
<<<<<<< HEAD
var clean = require('gulp-clean');
var gulp_jspm = require("gulp-jspm");

var scripts = 'public/scripts/';
var styles = 'public/styles/';
var appDist = 'dist/';
/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
// var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
/* SCSS */
var compass = require('gulp-compass');

=======
var sourcemaps = require('gulp-sourcemaps');
/* Mixed */
var ext_replace = require('gulp-ext-replace');

>>>>>>> alpha-v1
/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
/* SCSS */
var compass = require('gulp-compass');
/* Images */
var imagemin = require('gulp-imagemin');
/* Typescript*/
var tsProject = typescript.createProject('tsconfig.json');

<<<<<<< HEAD
=======

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

>>>>>>> alpha-v1
gulp.task('build-css', function() {
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest(dist_fonts + '/bootstrap'));
    gulp.src('node_modules/font-awesome/fonts/*')
<<<<<<< HEAD
        .pipe(gulp.dest('fonts'));
    gulp.src(styles + 'scss/*.scss')
        .pipe(compass({
            css: styles + 'css',
            sass: styles + 'scss'
        }))
        .pipe(gulp.dest(styles + 'css/'));
});

gulp.task('build-ts', function() {
    return gulp.src(scripts + 'ts/**/*.ts')
=======
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
>>>>>>> alpha-v1
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
<<<<<<< HEAD
        .pipe(gulp.dest(scripts + 'js'));
=======
        .pipe(gulp.dest(dist_ts));
>>>>>>> alpha-v1
});
gulp.task("jspm_bundle", ['build-ts'] ,function() {
    return gulp.src("./public/scripts/js/boot.js")
        .pipe(gulp_jspm({ selfExecutingBundle: true }))
        .pipe(gulp.dest("./public/scripts/bundled/"));

<<<<<<< HEAD
});
gulp.task('watch', function() {
    gulp.watch(scripts + '**/*.ts', ['build-ts']);
    gulp.watch(styles + 'scss/**/*.scss', ['build-css']);
=======
gulp.task('build-img', function() {
    return gulp.src(dev_imgs + '**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('watch', function() {
    gulp.watch(dev_ts + '**/*.ts', ['build-js']);
    gulp.watch(dev_scss + 'scss/**/*.scss', ['build-css']);
    gulp.watch(dev_tpl + '**/*.html', ['build-html']);
    gulp.watch(dev_index, ['build-html']);
    gulp.watch(dev_server_js, ['build-server']);
    //gulp.watch(dev_imgs + '*', ['build-img']);
>>>>>>> alpha-v1
});
gulps.registerTasks({
    'clean-dist': (function(done){
        gulp.src(appDist)
            .pipe(clean())
            .on('finish', function(){
                done();
            });
    }),
    'production-build': (function(){
        // Index.html
        gulp.src('index.html')
            .pipe(gulp.dest(appDist+'public'));
        // Getting all the js files into the dist folder
        gulp.src(scripts + '**/*.js')
            .pipe(gulp.dest(appDist+'public/js'));
        // Getting all the css files into the dist folder
        gulp.src('src/css/**/*.css')
            .pipe(gulp.dest(appDist+'public/styles/css'));
        // Getting all the html files into the dist folder
        gulp.src('templates/**/*.html')
            .pipe(gulp.dest(appDist+'public/templates'));
        // Server files
        gulp.src('server/**/*.js')
            .pipe(gulp.dest(appDist+'server'));
        gulp.src('server.js')
            .pipe(gulp.dest(appDist));
        // Package json file
        gulp.src('package.json')
            .pipe(gulp.dest(appDist));
        // gitignore
        gulp.src('.gitignore')
            .pipe(gulp.dest(appDist));

<<<<<<< HEAD
    })
})
gulp.task('default', ['watch', 'build-ts', 'build-css'])
gulps.registerSeries('build', ['clean-dist','production-build']);
=======
gulp.task('default', ['watch', 'build-js', 'build-css', 'build-html', 'build-libs']);
>>>>>>> alpha-v1
