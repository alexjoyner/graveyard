const express = require('express');
//var https = require('https');
const http = require('http');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const chunk = require('chunk-date-range');
const moment = require('moment');

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
    // Using the request library for it's digest auth function
    //  notice the sendImmediately equalling 'false'
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

app.get('/history/:username/:pass', (req, res) => {
    const { query, params } = req;
    const start = new Date(query.from);
    const end = new Date(query.to);
    const chunks = chunk(start, end, 'day');
    const days = chunks.length;
    const twoDayChunks = chunk(start, end, days/2);
    let requests = 0;
    let dataParts = {};
    if(twoDayChunks > 90){
        return res.status(400).send({'Error: ': 'can`t send more than 6 months of data'});
    }
    twoDayChunks.map((chunk, i) => {
        const start = moment(chunk.start).format('YYYY-MM-DD');
        const end = moment(chunk.end).format('YYYY-MM-DD');
        const route = `https://ezecontrol.com/api/log.php?input=${query.input}&from=${start}&to=${end}`;
        request.get(route, {
            'auth': {
                'user': params.username,
                'pass': params.pass,
                'sendImmediately': false
            }
        }, (err, response, body) => {
            if(err) return res.status(400).send({'Error: ': err});
            requests = requests + 1;
            let result = JSON.parse(body);
            dataParts[i] = result.data;
            console.log('Data is array: ', Array.isArray(result.data));
            if(requests === twoDayChunks.length){
                //build results
                let finalData = [];
                Object.keys(dataParts).map((key, i) => {
                    const dataChunk = dataParts[i + ''];
                    console.log(`Appending: Chunk ${i} a(n) `, Array.isArray(dataChunk));
                    finalData = finalData.concat(dataChunk);
                    console.log(finalData.length);
                });
                //
                result.data = finalData;
                return res.send(result);
            }
        });
        return chunk;
    });
});

http.createServer(app).listen(80, () => console.log('HTTP listening on port 80'));
//https.createServer(options, app).listen(443, () => console.log('HTTP listening on port 443'));