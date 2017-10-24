const express = require('express');
const app = express();

app.get('/:name', function (req, res) {
    res.send("Hello " + req.params.name + "!")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});