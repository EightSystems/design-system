const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/index.js",
    externals: [nodeExternals()],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            name: "@8sistemas/design-system",
            type: "umd",
        },
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "./src"),
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 123456789,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            svgoConfig: {
                                plugins: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    },
                    {
                        loader: "url-loader",
                        options: {
                            limit: 123456789,
                        },
                    },
                ],
            },
        ],
    },
};
