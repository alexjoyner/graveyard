// razzle.config.js

module.exports = {
    modify: (config, {target, dev}, webpack) => {
        // do something to config
        if(config.devServer){
            config.devServer.watchOptions['poll'] = 1000;
            config.devServer.watchOptions['aggregateTimeout'] = 300;
            console.log('Config: ', config);
        }
        return config
    }
};