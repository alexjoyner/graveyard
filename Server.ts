import express = require('express');
import {HttpPlcConnectionTest} from "./HttpPlcConnectionTest";
import {ModbusClient} from "./ModbusClient";
let app = express();
let client = new ModbusClient({
    host: '192.168.1.7',
    port: 502,
    autoReconnect: false,
    reconnectTimeout: 10000,
    timeout: 5000,
    unitId: 255
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/ai1', async (req, res) => {
    try{
        let data = await client.getAi(8335, 4);
        res.send(data);
        return;
    }
    catch (e){
        console.error('Get Ai Route Error: ', e);
    }
});

app.listen(4000, () => {
    console.log('App listening on port 4000');
});
