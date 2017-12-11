let express = require('express'),
    app = express();
let IO_DataService = require('./src/IO_DataService');
let io = require('socket.io-client');
let socket = io('http://localhost:3000');
console.log('Starting Socket');
socket.on('connect', function(){
    console.log('Connected to socket.io');
});


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

let logNewPoint = function (callback) {
    IO_DataService.fetchIO(function (err, data) {
        if (err) return callback(err);
        callback(null, data);
        // dataService.saveNewDataSetToCurrentHistory({
        //     'timestamp': new Date(),
        //     'data': data
        // }, function (err, data) {
        //     if (err) return callback(err);
        //     callback(null, data);
        // });
    });
};
let runEES_Logger = function () {
    console.log('Logging');
    logNewPoint(function (err, data) {
        if(err && err !== 1) throw err;
        console.log(data);
        if(data){
            socket.emit('new log', {value: data[1]});
        }
        setTimeout(function () {
            runEES_Logger();
        }, 3000)
    })
};
runEES_Logger();

app.get('/', function (req, res) {
    logNewPoint(function(err, data) {
        if (err) throw err;
        console.log(typeof data);
        socket.emit('new log', {value: data[1]});
        res.send({"Data": data});
    });
});

app.listen(80, function () {
    console.log('Modbus Connect up and running: Port 80');
});
