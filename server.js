const express = require('express');
const request = require('request');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/greeting', function (req, res) {
    request.get('http://hello-name/ronald', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            return res.send(body).end();
        }
        res.send(error).end();
    });
});

app.listen(80, function () {
    console.log('Api service started!')
});