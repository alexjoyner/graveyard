"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var xml2js_1 = require("xml2js");
var HttpPlcConnection = (function () {
    function HttpPlcConnection(connectInfo) {
        this.connectionInfo = connectInfo;
    }
    HttpPlcConnection.prototype.ping = function () {
        // let DigitalInputRequest = new XMLHttpRequest();
        // DigitalInputRequest.open("GET", `${this.connectionInfo.host}/evodi.cgx`, true);
        var options = {
            hostname: this.connectionInfo.host,
            path: '/evodo.cgx',
            headers: {
                Authorization: 'Basic YWRtaW5pc3RyYXRvcjpwYXNzd29yZA=='
            }
        };
        var rawData = '';
        http.get(options, function (res) {
            console.log('Headers: ', res.headers);
            res.on('data', function (chunk) {
                rawData += chunk;
            });
            res.on('end', function () {
                xml2js_1.parseString(rawData, function (err, result) {
                    console.log(result.form.select);
                });
            });
        }).on('error', function (e) {
            console.log('Error: ', e);
        });
    };
    return HttpPlcConnection;
}());
exports.HttpPlcConnection = HttpPlcConnection;
