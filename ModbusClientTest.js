"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModbusClient_1 = require("./ModbusClient");
var ModbusClientTest = (function () {
    function ModbusClientTest() {
        var clientConnectionInfo;
        clientConnectionInfo = {
            host: '192.168.1.7',
            port: 502,
            autoReconnect: false,
            reconnectTimeout: 10000,
            timeout: 5000,
            unitId: 202
        };
        var M172ModbusClient = new ModbusClient_1.ModbusClient(clientConnectionInfo);
        M172ModbusClient.GetConnection(function (client) {
            console.log('Success');
        }, function () {
            console.error('Error');
        });
    }
    ;
    return ModbusClientTest;
}());
exports.ModbusClientTest = ModbusClientTest;
