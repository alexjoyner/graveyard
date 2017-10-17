"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsmodbus_1 = require("jsmodbus");
var ModbusClient = (function () {
    function ModbusClient(connectInfo) {
        this.connectInfo = connectInfo;
        this.getClient();
    }
    ModbusClient.prototype.getClient = function () {
        this.client = jsmodbus_1.client.tcp.complete(this.connectInfo);
    };
    ModbusClient.prototype.GetConnection = function (success, error) {
        var _this = this;
        this.client.connect();
        this.client.on('connect', function () {
            success(_this.client);
            _this.client.readHoldingRegisters(15797, 4).then(function (resp) {
                console.log(resp.register[0]);
            }, function (err) {
                console.log('Err: ', err);
            });
        });
        this.client.on('error', function (err) {
            error(err);
        });
    };
    return ModbusClient;
}());
exports.ModbusClient = ModbusClient;
