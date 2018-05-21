const express = require('express')
const app = express()
const request = require('request');
var myLogger = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
  }
  
app.use(myLogger);

app.get('/api/status', (req, res) => {
    request.get('https://ezecontrol.com/api/status.php', {
        'auth': {
            'user': 'AAE599',
            'pass': 'romeo6424',
            'sendImmediately': false
        }
    }, (err, response, body) => {
        if(err) return res.status(400).send({'Error: ': err});
        res.send(body);
    });
})

app.listen(9000, () => console.log('Example app listening on port 3000!'));