var ENV = process.env.NODE_ENV || "dev";
// Look in ./config folder for webpack.dev.js
switch (ENV) {
  // case 'prod':
  // case 'production':
  //   module.exports = require('./config/webpack-prod.js');
  //   break;
  // case 'test':
  // case 'testing':
  //   module.exports = require('./config/webpack.test');
  //   break;
  case 'dev':
  case 'development':
  default:
    console.log('RUNNING DEV MODE WEBPACK');
    module.exports = require('./config/webpack-dev.js');
}