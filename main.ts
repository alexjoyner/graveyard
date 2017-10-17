import {HttpPlcConnectionTest} from "./HttpPlcConnectionTest";
import {ModbusClient} from "./ModbusClient";

class Main {
    constructor() {
        let test = new ModbusClient({
            host            : '192.168.1.7',
            port            : 502,
            autoReconnect   : false,
            reconnectTimeout: 10000,
            timeout         : 1000,
            unitId          : 255
        });
        test.GetConnection(() => {
            console.log('Success getting connection');
        }, (err) => {
            console.log('Error: ', err);
        });
    };
}
new Main();