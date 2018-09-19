let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let fs = require('fs');
const { Client } = require('pg');

const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('common'));


app.get('/all/:pointID', async (req, res) => {
    const { body } = req;
    try {
        const conInfo = {
            user: fs.readFileSync(process.env.PG_USER_FILE, 'utf8'),
            password: fs.readFileSync(process.env.PG_PASS_FILE, 'utf8'),
            database: fs.readFileSync(process.env.PG_DB_FILE, 'utf8'),
            host: fs.readFileSync(process.env.PG_HOST_FILE, 'utf8'),
        }
        console.log('Connection Info: ', conInfo)
        const client = new Client(conInfo);
        await client.connect();
        const logs = await client.query({
            rowMode: 'array',
            text: `
            WITH special_vals AS (
                SELECT 
                    count(*) as tot_vals,
                    (AVG(val) - STDDEV_SAMP(val) * 2.5) as lower_bound,
                    (AVG(val) + STDDEV_SAMP(val) * 2.5) as upper_bound
                FROM log
                WHERE 
                    point_id = $1
            )
            SELECT datetime, val FROM(
                SELECT 
                    date_part('epoch', datetime) * 1000 as datetime, 
                    val,
                    ROW_NUMBER() OVER (ORDER BY datetime asc) as rn
                FROM 
                    log 
                WHERE 
                    point_id = $1
                ORDER BY
                    datetime ASC
            ) logs
            WHERE 
                rn % ((SELECT tot_vals FROM special_vals) / 1440) = 0
                OR
                val < (SELECT lower_bound FROM special_vals) 
                OR 
                val > (SELECT upper_bound FROM special_vals);`,
            values: [req.params.pointID]
        })
        await client.end();
        res.send({
            source: {
                inputname: 'Test Point',
                unit: 'F'
            },
            data: logs.rows
        });
    }
    catch (e) {
        console.log("Error: ", e);
        res.status(500).send('Something went wrong. Sorry');
    }
});

app.get('/healthz', function (req, res) {
    // do app logic here to determine if app is truly healthy
    // you should return 200 if healthy, and anything else will fail
    // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
    res.send('I am happy and healthy\n');
});

let server = app.listen(PORT, function () {
    console.log('Historical Service is ready');
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
process.on('SIGINT', function onSigint() {
    console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
    shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm() {
    console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
    shutdown();
})

// shut down server
function shutdown() {
    server.close(function onServerClosed(err) {
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