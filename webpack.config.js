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
        loaders: [{
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack'],
                include: path.join(__dirname, 'client')
            }]
    }
};
//# sourceMappingURL=webpack.config.js.map