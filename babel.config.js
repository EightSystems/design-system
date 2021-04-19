module.exports = {
    plugins: [
        "babel-plugin-styled-components",
        [
            "file-loader",
            {
                name: "[hash].[ext]",
                extensions: ["png", "jpg", "jpeg", "gif", "svg"],
                publicPath: "/public",
                outputPath: "/public",
                context: "",
                limit: 0,
            },
        ],
    ],
    presets: ["@babel/preset-env", "@babel/preset-react", "minify"],
};
