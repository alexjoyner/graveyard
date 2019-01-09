const utils = require('ro-server-utils');
const axios = require('axios');
const NodeCache = require('node-cache');
const app = utils.getExpressApp()('basic');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const myCache = new NodeCache();

app.post('/newlog', (req, res) => {
  myCache.set(key, req.body[key])
  Object.keys(req.body).map(key => io.to(`point-${key}`).emit('add log', {
    pointID: key,
    log: req.body[key],
  }));
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
      if(cacheLog == undefined){
        const raw_data = await axios.get(`http://historical-service/last/${pointsArray[i]}`);
        const data = raw_data.data;
        if(data.length === 1){
          const last_value = data[0][1];
          myCache.set(pointsArray[i], last_value);
          socket.emit('add log', {
            pointID: pointsArray[i],
            log: {
              value: last_value,
              source: 'FROM DB :('
            },
          });
        }
      }else{
        socket.emit('add log', {
          pointID: pointsArray[i],
          log: {
            value: cacheLog,
            source: 'FROM CACHE :)'
          },
        });
      }
    }
  })
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
