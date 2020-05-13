const utils = require('ro-server-utils');
let axios = require('axios');
const app = utils.getExpressApp()('basic');
let server = require('http').Server(app);
let io = require('socket.io')(server);


app.post('/newlog', (req, res) => {
  Object.keys(req.body).map((key) => {
    io.to('point-' + key).emit('add log', {
      'pointID': key,
      'log': req.body[key]
    });
  })
  res.send(req.body).end();
});


io.on('connection', function (socket) {
  console.log(socket.id + ' New Connection');
  socket.on('join-group', (pointGroup) => {
    //TODO: Should regex authenticate good group name
    for (let i = 0; i < pointGroup.length; i++) {
      console.log('Joining group: ', 'point-' + pointGroup[i]); 
      socket.join('point-' + pointGroup[i]);
    }
  });
  socket.on('leave-group', (pointGroup) => {
    //TODO: Should regex authenticate good group name
    for (let i = 0; i < pointGroup.length; i++) {
      console.log('Leaving group: ', 'point-' + pointGroup[i]);
      socket.leave('point-' + pointGroup[i]);
    }
  });
  socket.on('disconnect', () => {
    console.log(socket.id + ' Disconnected')
  })
});


utils.runExpressApp()(server);