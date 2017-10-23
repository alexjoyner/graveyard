import {HttpPlcConnectionTest} from "./HttpPlcConnectionTest";
import {ModbusClient} from "./ModbusClient";

class Main {
    public test;
    constructor() {
        this.test = new ModbusClient({
            host            : '192.168.1.7',
            port            : 502,
            autoReconnect   : false,
            reconnectTimeout: 10000,
            timeout         : 1000,
            unitId          : 255
        });
    };
    public getData = async (): Promise<any> => {
        try {
            let client = await this.test.getData();
            return client;
        }
        catch (err){
            console.error(err);
        }
    }
}
let newConnection = new Main();

