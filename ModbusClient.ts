import {client} from 'jsmodbus';
export interface ModbusConnectionInfo {
    host            : string,
    port            : number,
    autoReconnect   : boolean,
    reconnectTimeout: number,
    timeout         : number,
    unitId          : number
}

export class ModbusClient{
    private connectInfo;
    private client;
    constructor(connectInfo: ModbusConnectionInfo){
        this.connectInfo = connectInfo;
        this.getClient();
    }
    private getClient(): void{
        this.client = client.tcp.complete(this.connectInfo)
    }
    public GetConnection(success: (client) => void, error: () => void){
        this.client.connect();
        this.client.on('connect', () => {
            success(this.client);
            this.client.readCoils(0, 99).then((resp) => {
                console.log('Response: ', resp);
            }, (err) => {
                console.log('Err: ', err);
            });
        });
        this.client.on('error', () => {
           error();
        });
    }
}