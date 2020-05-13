var express = require('express'),
    app = express();

app.get('/', function(req, res){
   res.send('Hello World!!!');
});

app.listen(3000, function(err){
    if(err) throw err;
    console.log('Server Listening!')
});