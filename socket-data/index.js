let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let axios = require('axios');
const PORT = process.env.PORT || 8080;

// App
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
app.use(morgan('common'));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/newlog', (req, res) => {
    io.sockets.emit('add log', req.body);
    axios.post('http://panel-data-api/new/panel-data', req.body);
    res.send(req.body).end();
});

io.on('connection', function (socket) {
    console.log(socket.id + ' New Connection');
    socket.on('new log', (log) => {
        socket.emit('logs', log);
    });
    socket.on('disconnect', () => {
        console.log(socket.id + ' Disconnected')
    })
});

app.get('/healthz',(req, res) =>{
	// do app logic here to determine if app is truly healthy
	// you should return 200 if healthy, and anything else will fail
	// if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('Webserver is ready');
});


//
// need this in docker container to properly exit since node doesn't handle SIGINT/SIGTERM
// this also won't work on using npm start since:
// https://github.com/npm/npm/issues/4603
// https://github.com/npm/npm/pull/10868
// https://github.com/RisingStack/kubernetes-graceful-shutdown-example/blob/master/src/index.js
// if you want to use npm then start with `docker run --init` to help, but I still don't think it's
// a graceful shutdown of node process
//

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint () {
	console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm () {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
  shutdown();
})

// shut down server
function shutdown() {
  server.close(function onServerClosed (err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
		}
		process.exit();
  })
}
//
// need above in docker container to properly exit
//

