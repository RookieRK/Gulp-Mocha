'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');
var args   = require('yargs').argv;

//We are taking from command line argument to parameterize. Since normal argument may or may not work, we are using this library
process.env.testArray = args.testArray;

gulp.task('test', () =>
	gulp.src('test/test.js')
		.pipe(mocha())
);