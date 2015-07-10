'use strict';

var gulp = require( 'gulp' );
var jshint = require( 'gulp-jshint' );
var jscs = require( 'gulp-jscs' );

var allFiles = 'js/**/*.js';

gulp.task( 'lint', function() {
  gulp.src( allFiles )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) );

  gulp.src( allFiles )
    .pipe( jscs({
      fix: true,
      configPath: './.jscsrc'
    }) )
    .pipe( gulp.dest( 'js' ) );
});

gulp.task( 'default', ['lint'], function() {
  gulp.watch( allFiles, ['lint'] );
});
