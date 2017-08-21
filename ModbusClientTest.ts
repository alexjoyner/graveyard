import {ModbusClient, ModbusConnectionInfo} from "./ModbusClient";

export class ModbusClientTest{
    constructor() {
        let clientConnectionInfo: ModbusConnectionInfo;
        clientConnectionInfo = {
            host: '192.168.1.7',
            port: 502,
            autoReconnect: false,
            reconnectTimeout: 10000,
            timeout: 5000,
            unitId: 202
        };
        let M172ModbusClient = new ModbusClient(clientConnectionInfo);
        M172ModbusClient.GetConnection(
            (client) => {
                console.log('Success');
            }, () => {
                console.error('Error');
            });
    };

}