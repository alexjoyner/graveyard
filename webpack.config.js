"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
module.exports = {
    entry: {
        app: ["./client/clientDevTarget.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['react-hot-loader/webpack'],
                include: path.join(__dirname, 'client')
            }, {
                test: /\.sass/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
    }
};
//# sourceMappingURL=webpack.config.js.map