import {client} from 'jsmodbus';

export interface ModbusConnectionInfo {
    host: string,
    port: number,
    autoReconnect: boolean,
    reconnectTimeout: number,
    timeout: number,
    unitId: number
}

export class ModbusClient {
    private connectInfo;
    private client;

    constructor(connectInfo: ModbusConnectionInfo) {
        this.connectInfo = connectInfo;
        this.getClient();
    }

    private getClient(): void {
        this.client = client.tcp.complete(this.connectInfo)
    }

    public GetConnection(success: (client) => void, error: (err) => any) {
        this.client.connect();
        this.client.on('connect', () => {
            success(this.client);
            this.client.readHoldingRegisters(15797, 4).then((resp) => {
                console.log(resp.register[0]);
            }, (err) => {
                console.log('Err: ', err);
            });
        });
        this.client.on('error', (err) => {
            error(err);
        });
    }
}