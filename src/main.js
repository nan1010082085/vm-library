if ( process.env.NODE_ENV === 'production' ) {
  module.exports = require('../dist/vm-library-common.mini.js');
} else {
  module.exports = require('../dist/vm-library-common.js');
  
}