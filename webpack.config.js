const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');


module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    devtool: "source-map",
    performance: {
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000,
        hints: false
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
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties', 
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                   },
             },
             {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              }
            ]
            },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
             })
          ]
};