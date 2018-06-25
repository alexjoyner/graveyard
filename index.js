const express = require('express');
//var https = require('https');
const http = require('http');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
var myLogger = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
  }
  
app.use(myLogger);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/status/:username/:pass', (req, res) => {
    request.get('https://ezecontrol.com/api/status.php', {
        'auth': {
            'user': req.params.username,
            'pass': req.params.pass,
            'sendImmediately': false
        }
    }, (err, response, body) => {
        if(err) return res.status(400).send({'Error: ': err});
        res.send(body);
    });
})

http.createServer(app).listen(80, () => console.log('HTTP listening on port 80'));
//https.createServer(options, app).listen(443, () => console.log('HTTP listening on port 443'));