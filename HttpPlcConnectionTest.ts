import {HttpPlcConnection} from "./HttpPlcConnection";

export class HttpPlcConnectionTest{
    public testConnection;
    constructor(){
        this.testConnection = new HttpPlcConnection({
            host: '192.168.1.7'
        });
    }
    public getData(response){
        this.testConnection.ping((data) => {
            response(data);
        });
    }
}