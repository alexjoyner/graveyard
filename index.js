let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
const axios = require('axios');
const { Client } = require('pg');

const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.json());


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(morgan('common'));
app.post('/test', async (req, res) => {
  const { body } = req;
  try{
    const client = new Client({
      user: 'postgres',
      password: 'password',
      database: 'postgres',
      host: 'postgres',
    });
    await client.connect();
    const log = await client.query(
      'INSERT INTO "log" ("point_id", "datetime", "val") VALUES ($1, $2, $3)', 
      [body.pointID, body.dateTime, body.value]
    )
    await axios.post('http://socket-service/newlog', body);
    await client.end();
    res.send(200);
  }
  catch(e){  
    console.log("Error: ", e);
  }
})

app.post('/', function (req, res) {
  console.log('New Log: ', req.body);
  res.send('Saving new log!');
});

app.get('/healthz', function (req, res) {
	// do app logic here to determine if app is truly healthy
	// you should return 200 if healthy, and anything else will fail
	// if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

let server = app.listen(PORT, function () {
  console.log('Log Handler is ready');
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

