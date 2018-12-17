const utils = require('ro-server-utils');

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
  socket.on('join-group', (pointGroup) => {
    // TODO: Should regex authenticate good group name
    for (let i = 0; i < pointGroup.length; i += 1) {
      console.log('Joining group: ', `point-${pointGroup[i]}`);
      socket.join(`point-${pointGroup[i]}`);
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
