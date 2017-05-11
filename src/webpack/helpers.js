/**
 * @author: @AngularClass
 */
// Helper functions
function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server$/.exec(process.argv[1]));
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
