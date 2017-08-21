import {HttpPlcConnection} from "./HttpPlcConnection";

export class HttpPlcConnectionTest{
    constructor(){
        let testConnection = new HttpPlcConnection({
            host: '192.168.1.7'
        });
        testConnection.ping();
    }
}