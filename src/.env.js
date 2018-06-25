const {NODE_ENV} = process.env;

const DEV_CONFIG = {
  serverAddr: 'http://localhost:8080'
}

const PROP_CONFIG = {
  serverAddr: 'https://api.voicir.com'
}


const env = (NODE_ENV === 'production')?PROP_CONFIG : DEV_CONFIG;


export {env};