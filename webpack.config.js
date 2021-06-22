const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const PATHS = {
    entryPoint: path.resolve(__dirname, "./src/index.js"),
    bundles: path.resolve(__dirname, "_bundles"),
};

module.exports = {
    // These are the entry point of our library. We tell webpack to use
    // the name we assign later, when creating the bundle. We also use
    // the name to filter the second entry point for applying code
    // minification via UglifyJS
    entry: {
        "bundle": [PATHS.entryPoint],
        "bundle.min": [PATHS.entryPoint],
    },
    externals: [nodeExternals()],
    // The output defines how and where we want the bundles. The special
    // value `[name]` in `filename` tell Webpack to use the name we defined above.
    // We target a UMD and name it MyLib. When including the bundle in the browser
    // it will be accessible at `window.MyLib`
    output: {
        path: PATHS.bundles,
        filename: "[name].js",
        library: {
            name: "@8sistemas/design-system",
            type: "umd",
            umdNamedDefine: true,
        },
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            'react': path.resolve('./node_modules/react'),
            'styled-components': path.resolve('./node_modules/styled-components')
        }
    },
    // Activate source maps for the bundles in order to preserve the original
    // source when the user debugs the application
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            }),
        ],
    },
    module: {
        // Webpack doesn't understand TypeScript files and a loader is needed.
        // `node_modules` folder is excluded in order to prevent problems with
        // the library dependencies
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    // we don't want any declaration file in the bundles
                    // folder since it wouldn't be of any use as the source
                    // map already includes everything for debugging purposes.
                    // compilerOptions: {
                    //     declaration: false,
                    // },
                },
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

// module.exports = {
//     entry: "./src/index.js",
//     externals: [nodeExternals()],
//     output: {
//         filename: "[name].js",
//         path: path.resolve(__dirname, "dist"),
//         library: {
//             name: "@8sistemas/design-system",
//             type: "umd",
//         },
//     },
//     optimization: {
//         minimize: true,
//         minimizer: [
//             new TerserPlugin(),
//         ]
//     },
//     plugins: [new CleanWebpackPlugin()],
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: ["babel-loader"],
//             },
//             {
//                 test: /\.scss$/,
//                 use: ["style-loader", "css-loader", "sass-loader"],
//                 include: path.resolve(__dirname, "./src"),
//             },
//             {
//                 test: /\.(png|jpg|gif)$/i,
//                 use: [
//                     {
//                         loader: "url-loader",
//                         options: {
//                             limit: 123456789,
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.svg$/,
//                 use: [
//                     {
//                         loader: "@svgr/webpack",
//                         options: {
//                             svgoConfig: {
//                                 plugins: {
//                                     removeViewBox: false,
//                                 },
//                             },
//                         },
//                     },
//                     {
//                         loader: "url-loader",
//                         options: {
//                             limit: 123456789,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
// };
