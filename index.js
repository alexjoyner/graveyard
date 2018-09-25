let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let fs = require('fs');
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
let conInfo = {
  user: fs.readFileSync(process.env.PG_USER_FILE, 'utf8'),
  password: fs.readFileSync(process.env.PG_PASS_FILE, 'utf8'),
  database: fs.readFileSync(process.env.PG_DB_FILE, 'utf8'),
  host: fs.readFileSync(process.env.PG_HOST_FILE, 'utf8'),
}
app.get('/groups/:id', async (req, res) => {
  const { id } = req.params;
  let Query = 'SELECT id, name FROM point_group WHERE client_id = $1;'
  const client = new Client(conInfo);
  try{
    await client.connect();
    const rawData = await client.query({
      text: Query,
      values: [id]
    })
    const result = rawData.rows
    await client.end();
    res.send(result);
  }
  catch(e){  
    console.log("Error: ", e);
    client.end();
    res.status(500).send('Something went wrong. Sorry');
  }
})

app.get('/points/group/:groupID', async (req, res) => {
  const { groupID } = req.params;
  let Query = `
  SELECT 
    point.*
  FROM point_group_x_point 
  INNER JOIN
    point
  ON
    (point_group_x_point.point_id = point.id)
  WHERE 
    point_group_id = $1;`
  const client = new Client(conInfo);
  try{
    await client.connect();
    const rawData = await client.query({
      text: Query,
      values: [groupID]
    })
    const result = rawData.rows
    await client.end();
    res.send(result);
  }
  catch(e){  
    console.log("Error: ", e);
    client.end();
    res.status(500).send('Something went wrong. Sorry');
  }
})
app.get('/points/:clientID', async (req, res) => {
  const { clientID } = req.params;
  let Query = 'SELECT id, name FROM point WHERE client_id = $1;'
  const client = new Client(conInfo);
  try{
    await client.connect();
    const rawData = await client.query({
      text: Query,
      values: [clientID]
    })
    const result = rawData.rows
    await client.end();
    res.send(result);
  }
  catch(e){  
    console.log("Error: ", e);
    client.end();
    res.status(500).send('Something went wrong. Sorry');
  }
})
app.get('/healthz', function (req, res) {
	// do app logic here to determine if app is truly healthy
	// you should return 200 if healthy, and anything else will fail
	// if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

let server = app.listen(PORT, function () {
  console.log('Accounts Service is ready');
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

