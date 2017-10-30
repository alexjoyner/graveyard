module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ],
                    plugins: ["transform-class-properties"]
                }
            },
            {
                test: /\.(css|pcss|scss|sss)$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:[
                                require('postcss-nested')
                            ]
                        }
                    }
                ]
            }
        ]
    }
};