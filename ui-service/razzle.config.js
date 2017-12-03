const autoprefixer = require('autoprefixer');

module.exports = {
    modify: (config, {target, dev}, webpack) => {
        if(target === 'web'){
            config.module.rules[4].use[2].options.plugins = () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-nested'),
                autoprefixer({
                    browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                }),
            ];
        }

        /* Since docker for windows does not currently communicate natively with
        * the linux VM file events, we have to use polling in webpack*/
        if(config.devServer){
            config.devServer.watchOptions['poll'] = 1000;
            config.devServer.watchOptions['aggregateTimeout'] = 300;
            console.log('Config: ', config);
        }
        return config;
    }
};