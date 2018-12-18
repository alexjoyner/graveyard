const utils = require('ro-server-utils');
const axios = require('axios');
const app = utils.getExpressApp()('basic');
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.post('/newlog', (req, res) => {
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
      const raw_data = await axios.get(`http://historical-service/last/${pointsArray[i]}`);
      const data = raw_data.data;
      if(data.length === 1){
        const last_value = data[0][1];
        console.log('Socket: ', socket.id)
        console.log('Adding point: ', {
          pointID: pointsArray[i],
          log: last_value,
        });

        socket.emit('add log', {
          pointID: pointsArray[i],
          log: {
            value: last_value
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
