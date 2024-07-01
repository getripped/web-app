const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: "production",

    entry: "./src/index.js",

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },

    plugins: [
        new Dotenv({
            // path: "./.env",
            systemvars: true,
        }),
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
