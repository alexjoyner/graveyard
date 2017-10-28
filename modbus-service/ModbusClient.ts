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
    private client;

    constructor(connectInfo: ModbusConnectionInfo) {
        this.prepareClient(connectInfo)
    }

    private prepareClient(connectInfo: ModbusConnectionInfo): void {
        this.client = client.tcp.complete(connectInfo)
    }

    public getAi = async (startingAddress: number, numAddressesAfterStart: number): Promise<any> => {
        try{
            // const client = await this.client.connect();
            // const rawReturnedData = await client.readHoldingRegisters(startingAddress, numAddressesAfterStart);
            // const aiData = rawReturnedData.register;
            // client.close();
            // return aiData;
            return 72;

        }
        catch (e){
            console.error('Error get ai: ', e);
        }
    }
}