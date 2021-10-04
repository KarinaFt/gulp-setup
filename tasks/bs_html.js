const bs = require('browser-sync');

module.exports = function bs_html() {
  bs.init({
    server: {
      baseDir: 'build/',
    },
    logPrefix: 'BS-HTML:',
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    open: true
  })
}