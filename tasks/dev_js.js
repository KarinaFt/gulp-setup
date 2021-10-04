const {src, dest} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function dev_js() {
  return src('src/js/script.js')
    .pipe(map.init())
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(map.write('../sourcemaps'))
    .pipe(dest('build/js/'))
    .pipe(bs.stream())
}