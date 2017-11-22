var express = require('express'),
    app = express();
var fs = require('fs');
var dataService = require('./historicalDataService');
var IO_DataService = require('./IO_DataService');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var logNewPoint = function (callback) {
    IO_DataService.fetchIO(function (err, data) {
        if (err) return callback(err);
        dataService.saveNewDataSetToCurrentHistory({
            'timestamp': new Date(),
            'data': data
        }, function (err, data) {
            if (err) return callback(err);
            callback(null, data);
        });
    });
}
var runEES_Logger = function () {
    console.log('Logging');
    logNewPoint(function (err, data) {
        if(err && err !== 1) throw err;
        console.log('Logged Data: ' + JSON.stringify(data));
        setTimeout(function () {
            runEES_Logger();
        }, 10000)
    })
}
runEES_Logger();

app.get('/', function (req, res) {
    logNewPoint(function(err, data) {
        if (err) throw err;
    });
});

app.listen(3000, function () {
    console.log('Modbus Connect up and running');
});
