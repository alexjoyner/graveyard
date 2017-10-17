"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModbusClient_1 = require("./ModbusClient");
var Main = (function () {
    function Main() {
        var test = new ModbusClient_1.ModbusClient({
            host: '192.168.1.7',
            port: 502,
            autoReconnect: false,
            reconnectTimeout: 10000,
            timeout: 1000,
            unitId: 255
        });
        test.GetConnection(function () {
            console.log('Success getting connection');
        }, function (err) {
            console.log('Error: ', err);
        });
    }
    ;
    return Main;
}());
new Main();
