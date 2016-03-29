var gulp = require('gulp');
var gulps = require('gulp-series');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');
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

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function() {
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('fonts/bootstrap'));
    gulp.src('node_modules/font-awesome/fonts/*')
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
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(scripts + 'js'));
});
gulp.task("jspm_bundle", ['build-ts'] ,function() {
    return gulp.src("./public/scripts/js/boot.js")
        .pipe(gulp_jspm({ selfExecutingBundle: true }))
        .pipe(gulp.dest("./public/scripts/bundled/"));

});
gulp.task('watch', function() {
    gulp.watch(scripts + '**/*.ts', ['build-ts']);
    gulp.watch(styles + 'scss/**/*.scss', ['build-css']);
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

    })
})
gulp.task('default', ['watch', 'build-ts', 'build-css'])
gulps.registerSeries('build', ['clean-dist','production-build']);