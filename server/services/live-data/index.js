const { makeApp } = require('ro-server-utils');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = makeApp('basic');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const myCache = new NodeCache();

app.post('/newlog', (req, res) => {
  Object.keys(req.body).map((key) => {
    io.to(`point-${key}`).emit('add log', {
      pointID: key,
      log: req.body[key],
    });
    myCache.set(key, req.body[key].value);
    return null;
  });
  res.send(req.body).end();
});

io.on('connection', (socket) => {
  console.log(`${socket.id} New Connection`);
  socket.on('join-group', async (pointGroup) => {
    // TODO: Should regex authenticate good group name
    for (let i = 0; i < pointGroup.length; i += 1) {
      console.log('Joining group: ', `point-${pointGroup[i]}`);
      socket.join(`point-${pointGroup[i]}`);
    }
  });
  socket.on('get-last-logs', async (pointsArray) => {
    for (let i = 0; i < pointsArray.length; i += 1) {
      const cacheLog = myCache.get(pointsArray[i]);
      if (cacheLog === undefined) {
        // TODO: Abstract out loop await for eslint
        const { data } = await axios.get(`http://graphs/last/${pointsArray[i]}`); // eslint-disable-line
        if (data.length === 1) {
          const lastValue = data[0][1];
          myCache.set(pointsArray[i], lastValue);
          socket.emit('add log', {
            pointID: pointsArray[i],
            log: {
              value: lastValue,
              source: 'FROM DB :(',
            },
          });
        }
      } else {
        socket.emit('add log', {
          pointID: pointsArray[i],
          log: {
            value: cacheLog,
            source: 'FROM CACHE :)',
          },
        });
      }
    }
  });
  socket.on('leave-group', (pointGroup) => {
    // TODO: Should regex authenticate good group name
    for (let i = 0; i < pointGroup.length; i += 1) {
      console.log('Leaving group: ', `point-${pointGroup[i]}`);
      socket.leave(`point-${pointGroup[i]}`);
    }
  });
  socket.on('disconnect', () => {
    console.log(`${socket.id} Disconnected`);
  });
});


// runApp(server);

const PORT = process.env.PORT || 8080;
// #### Global Error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500);
  res.json({
    error: { message: err.message || 'Internal Error' },
  });
  return null;
});

server.listen(PORT, () => {
  console.log(
    `App is running on interal port ${PORT}:
        If this service is running in a container, you
        will need to expose this port to the outside world
        to have direct access to it.`,
  );
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
process.on('SIGINT', () => {
  console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', () => {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
  shutdown();
});

// shut down server
function shutdown() {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  });
}
//
// need above in docker container to properly exit
//
