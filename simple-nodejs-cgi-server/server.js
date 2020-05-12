/*Dependencies*/
var express = require('express'),
    app = express();
var cgi = require('cgi');
var path = require('path');
var http = require('http').Server(app);
var mainCgi = path.resolve(__dirname, 'cgi-bin');
//var morgan = require('morgan');
//app.use(morgan('dev'));
app.get('*', cgi(mainCgi + '/asetup471.cgi', {
    env: {
        SCRIPT_NAME: '/cgi-bin/asetup471.cgi'
    }
}));
/* What port sh ould the server start on*/
var port = (process.env.PORT || 9000);
/* Start the server */
app.listen(port, function(err) {
    if (err) throw err;
    console.log('App listening on port: ', port);
});
// var cgi = require('cgi');
// var http = require('http');
// var path = require('path');
// var mainCgi = path.resolve(__dirname, 'bin.cgi');
// http.createServer( cgi(mainCgi) ).listen(9000);