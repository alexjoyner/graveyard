const utils = require('ro-server-utils');
const axios = require('axios');
const NodeCache = require('node-cache');

const app = utils.getExpressApp()('basic');
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


utils.runExpressApp()(server);
