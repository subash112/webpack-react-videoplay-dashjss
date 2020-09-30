const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');


module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
           {
               test: /\.js$/,
               exclude: /(node_modules)/,
               use: {
                    loader: "babel-loader",
                    options: {
                    presets: [
                        "@babel/preset-react", 
                        "@babel/preset-env"
                     ]}
                   }
             }]},
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
             })
          ]
};