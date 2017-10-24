const express = require('express');
const app = express();

app.get('/greeting', function (req, res) {
    res.send("Hello charles!")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});