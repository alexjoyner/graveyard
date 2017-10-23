import * as http from 'http';
import {parseString} from 'xml2js';
export interface HttpConnectionInfo {
    host: string
}
export class HttpPlcConnection {
    private connectionInfo: HttpConnectionInfo;
    constructor(connectInfo: HttpConnectionInfo){
        this.connectionInfo = connectInfo;
    }
    ping(success) {
        // let DigitalInputRequest = new XMLHttpRequest();
        // DigitalInputRequest.open("GET", `${this.connectionInfo.host}/evodi.cgx`, true);
        let options = {
            hostname: this.connectionInfo.host,
            path: '/evoai.cgx',
            headers: {
                Authorization: 'Basic YWRtaW5pc3RyYXRvcjpwYXNzd29yZA=='
            }
        };
        let rawData = '';
        http.get(options, (res) => {
            console.log('Headers: ', res.headers);
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                parseString(rawData, (err, result) => {
                    console.log(result.form.text[0].value[0]);
                    success(result.form.text[0].value[0]);
                });
            });
        }).on('error', (e) => {
            console.log('Error: ', e);
        })
    }
}