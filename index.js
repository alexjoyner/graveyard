const express = require('express')
const app = express()
const request = require('request');
const dummyData = {
    inputs: {
        1: {
            name: 'Sensor 1',
            real: -20
        },
        2: {
            name: 'Sensor 2',
            real: 40
        },
        3: {
            name: 'Sensor 3',
            real: 800
        },
        4: {
            name: 'Sensor 4',
            real: 80.90
        },
        5: {
            name: 'Sensor 5',
            real: -345.34
        },
        6: {
            name: 'Sensor 6',
            real: -8.00
        },
        7: {
            name: 'Sensor 7',
            real: -32768
        },
        8: {
            name: 'Sensor 8',
            real: 2
        }
    }
}
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