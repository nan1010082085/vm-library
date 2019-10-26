if ( process.env.NODE_ENV === 'production' ) {
  module.exports = require('./dist/vm-library.mini.js');
} else {
  module.exports = require('./dist/vm-library.js');
}