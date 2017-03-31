module.exports = function(app, http){
	var io = require('socket.io')(http);

	// Make io accessible to our router
	app.use(function(req, res, next) {
	    'use strict';
	    req.io = io;
	    next();
	});

	io.on('connection', function(socket) {
	    console.log('A user just connected with id ' + socket.id);
	    socket.on("change room", function(data) {
	        for (room in socket.rooms) {
	            if (socket.id !== room) socket.leave(room);
	        }
	        socket.join(data.newroom, function() {
	            console.log('rooms', socket.rooms);
	        });
	    });
	    socket.on('disconnect', function() {
	        console.log('user ' + socket.id + ' disconnected');
	    });
	})
};

/*
var options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    }
};
*/
