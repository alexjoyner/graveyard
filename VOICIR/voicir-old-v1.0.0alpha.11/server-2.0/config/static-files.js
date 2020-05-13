// Dependencies
var express = require('express');
var path = require('path');

module.exports = function(app){
	console.log('Config Directory: ', __dirname);
	// Send files from angular
	app.use(express.static(path.resolve(__dirname, '../../dist_client')));
	app.use('/client', express.static(path.resolve(__dirname, '../../dist_client/client')));
	var renderIndex = function(req, res) {
	    res.sendFile(path.resolve(__dirname, '../../dist_client/index.html'));
	};
	// ANY ROUTE THAT ISN'T AN API ROUTE, send the homepage
	app.get('*', renderIndex);
}