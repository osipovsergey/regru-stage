var gulp = require('gulp'),
    less  = require('gulp-less'),
    browserSync    =  require('browser-sync'),
    concat    =  require('gulp-concat'),
    uglifyJs  =  require('gulp-uglifyjs'),
    cssNano    =  require('gulp-cssnano'),
    rename    =  require('gulp-rename'),
    autoprefixer  =  require('gulp-autoprefixer'),
    image = require('gulp-image'),
    clean = require('gulp-clean');

gulp.task( 'less', function() {
    return gulp.src('src/less/**/*.less')
        .pipe( less() )
        .pipe( autoprefixer( [
            'last 1 version',
        ], {
            cascade : true,
        } ) )
        .pipe( gulp.dest('src/css') )
        .pipe( browserSync.reload( {
            stream : true,
        } ) );
} );

gulp.task( 'min-css', ['less'] , function() {
    return gulp.src('src/css/*.css')
        .pipe( cssNano() )
        .pipe( rename( {
            suffix : '.min',
        } ) )
        .pipe( gulp.dest('dist/css') );
} );


gulp.task( 'min-js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe( concat('libs.min.js') )
        .pipe( uglifyJs() )
        .pipe( gulp.dest('src/js') );
} );

gulp.task( 'browser-sync', function() {
    browserSync( {
        server : {
            baseDir : 'src',
        },
    } );
} );

gulp.task( 'watch', ['browser-sync'], function() {
    gulp.watch( 'src/less/**/*.less', ['less'] );
    gulp.watch( 'src/js/**/*.js', browserSync.reload );
    gulp.watch( 'src/**/*.html', browserSync.reload );
} );

gulp.task( 'clean', function() {
    return gulp.src('dist')
        .pipe( clean( { force: true } ) )
        .pipe( gulp.dest('') );
} );

gulp.task( 'image', () => {
    gulp.src('src/img/*')
        .pipe( image( {
            pngquant       : true,
            optipng        : false,
            zopflipng      : true,
            jpegRecompress : false,
            mozjpeg        : true,
            guetzli        : false,
            gifsicle       : true,
            svgo           : true,
            concurrent     : 10,
            quiet          : true,
        } ) )
        .pipe( gulp.dest('src/img') );
} );

gulp.task( 'build', ['clean', 'min-css', 'min-js'], function() {
    var buildCss = gulp.src( [
        'src/css/*.css',
    ] )
        .pipe( gulp.dest('dist/css') );

    var buildFonts = gulp.src('src/fonts/**/*')
        .pipe( gulp.dest('dist/fonts') );

    var buildJs = gulp.src('src/js/**/*')
        .pipe( gulp.dest('dist/js') );

    var buildImg = gulp.src('src/img/**/*')
        .pipe( gulp.dest('dist/img') );

    var buildHtml = gulp.src('src/pages/*.html')
        .pipe( gulp.dest('dist') );
} );
