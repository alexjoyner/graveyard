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
      return config;
  }
};