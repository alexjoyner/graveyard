"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpPlcConnection_1 = require("./HttpPlcConnection");
var HttpPlcConnectionTest = (function () {
    function HttpPlcConnectionTest() {
        var testConnection = new HttpPlcConnection_1.HttpPlcConnection({
            host: '192.168.1.7'
        });
        testConnection.ping();
    }
    return HttpPlcConnectionTest;
}());
exports.HttpPlcConnectionTest = HttpPlcConnectionTest;
