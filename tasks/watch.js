const {watch, parallel,} = require('gulp');

module.exports = function watching() {
  watch('src/index.html', parallel('html'));
  watch('src/scss/main.scss', parallel('style'));
  watch('src/js/script.js', parallel('dev_js'));
}