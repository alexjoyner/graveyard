"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpPlcConnection_1 = require("./HttpPlcConnection");
var HttpPlcConnectionTest = (function () {
    function HttpPlcConnectionTest() {
        this.testConnection = new HttpPlcConnection_1.HttpPlcConnection({
            host: '192.168.1.7'
        });
    }
    HttpPlcConnectionTest.prototype.getData = function (response) {
        this.testConnection.ping(function (data) {
            response(data);
        });
    };
    return HttpPlcConnectionTest;
}());
exports.HttpPlcConnectionTest = HttpPlcConnectionTest;
//# sourceMappingURL=HttpPlcConnectionTest.js.map