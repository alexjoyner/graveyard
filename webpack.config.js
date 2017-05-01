var ENV = process.env.NODE_ENV || "dev";
// Look in ./_config folder for webpack.dev.js
switch (ENV) {
  case 'dev':
  case 'development':
  default:
    console.log('RUNNING DEV MODE WEBPACK');
    module.exports = require('./_config/webpack-dev.js');
}
