const { makeApp, runApp } = require('ro-server-utils');
const axios = require('axios');

const app = makeApp('basic');
const io = require('socket.io-client');
const ioDataService = require('./src/IO_DataService');

const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'http://localhost:3000';
const socket = io(SERVER_ADDRESS);

socket.on('connect', () => {
  console.log('Connected to socket.io');
});


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const logNewPoint = (callback) => {
  ioDataService.fetchEnabledIO(async (err, logs) => {
    if (err) return callback(err);
    console.log('logs: ', logs);
    if (logs) {
      try {
        await axios.post(`${SERVER_ADDRESS}/new`, logs);
      } catch (e) {
        throw e;
      }

      // socket.emit('new log', { value: data[1] });
    }
    return callback(null, 200);
    // Format data

    // dataService.saveNewDataSetToCurrentHistory({
    //     'timestamp': new Date(),
    //     'data': data
    // }, function (err, data) {
    //     if (err) return callback(err);
    //     callback(null, data);
    // });
  });
};
const runEesLogger = () => {
  console.log('Logging');
  logNewPoint((err) => {
    if (err && err !== 1) throw err;
    setTimeout(() => {
      runEesLogger();
    }, 3000);
  });
};
runEesLogger();

app.get('/', (req, res) => {
  logNewPoint((err, data) => {
    if (err) throw err;
    console.log(typeof data);
    socket.emit('new log', { value: data[1] });
    res.send({ Data: data });
  });
});

runApp(app);
