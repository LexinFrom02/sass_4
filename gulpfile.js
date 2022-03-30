// var gulp = require('gulp'),
// // sass = require('gulp-sass');
// sass = require('gulp-sass')(require('sass'));

// sass.compiler = require('node-sass');


// gulp.task('hello', function (done) {
// console.log('Hello World!');
// done();
// });

// gulp.task('sass', function () {
// return gulp.src('./scss/**/*.scss')
// .pipe(sass().on('error', sass.logError))
// .pipe(gulp.dest('./css'));
// });

// var gulp = require('gulp'),
// sass = require('gulp-sass')(require('sass'));

// sass.compiler = require('node-sass');

// gulp.task('hello', function (done) {
// console.log('Hello World!');
// done();
// });

// gulp.task('sass', function () {
// return gulp.src('./scss/**/*.scss')
// .pipe(sass().on('error', sass.logError))
// .pipe(gulp.dest('./css'));
// });

// gulp.task('watch', function () {
// gulp.watch('./scss/**/*.scss', gulp.series('sass'));
// })

// var gulp = require('gulp'),
// sass = require('gulp-sass');

// sass.compiler = require('node-sass');

// gulp.task('hello', function (done) {
// console.log('Hello World!');
// done();
// });

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('hello', function (done) {
console.log('Hello World!');
done();
});

gulp.task('sass', function () {
return gulp.src('./scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./css'));
});