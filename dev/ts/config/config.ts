export class Config {
    // App configuration

    /*
     Endpoint of the server, when running
     with the server independant, this is
     usually 'http://localhost:XXXX'
     */
    static endpoint: string = (ENV.env_dev)? "http://localhost:8080" : "";
}
console.log('ENDPOINT: ', Config.endpoint);