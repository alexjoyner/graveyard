const {NODE_ENV} = process.env;

const DEV_CONFIG = {
  serverAddr: 'http://localhost:8080'
}

const PROD_CONFIG = {
  serverAddr: 'https://api.voicir.com'
}


const env = (NODE_ENV === 'production')?/* istanbul ignore next */ PROD_CONFIG : DEV_CONFIG;

export {env}; 