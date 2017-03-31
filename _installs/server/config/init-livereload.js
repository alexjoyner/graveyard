var config = require('./config.js');

module.exports = function(){
	if (config.ENV !== 'production') {
		console.log('Starting livereload server');
		var livereload = require('livereload'),
    		liveServer = livereload.createServer();
	    liveServer.watch([__dirname + '/../**.*', __dirname + '/../../dist_client/**.*']);
	}
};
