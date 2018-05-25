const express = require('express');
//var https = require('https');
var http = require('http');
const app = express();
const request = require('request');
var myLogger = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
  }
  
app.use(myLogger);

app.get('/api/status', (req, res) => {
    // request.get('https://ezecontrol.com/api/status.php', {
    //     'auth': {
    //         'user': 'AAE599',
    //         'pass': 'romeo6424',
    //         'sendImmediately': false
    //     }
    // }, (err, response, body) => {
    //     if(err) return res.status(400).send({'Error: ': err});
    //     res.send(body);
    // });
    res.send({
        inputs: {
            1: {
                name: 'Test Input',
                real: 3
            }
        }
    });
})

http.createServer(app).listen(80, () => console.log('HTTP listening on port 80'));
//https.createServer(options, app).listen(443, () => console.log('HTTP listening on port 443'));