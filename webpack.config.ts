import * as path from "path";

module.exports = {
    entry: {
        app: ["./client/clientDevTarget.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    }
};