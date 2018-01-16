const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/:name', function (req, res) {
    res.send("Hello there " + req.params.name + "!").end();
});

app.listen(80, function () {
    console.log('Hello Name service started!')
});