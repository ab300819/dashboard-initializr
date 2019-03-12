const path = require('path');
const VueLoaderPlugin = require('vue-loader');
const HTMLPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

const dev = process.env.NODE_ENV === 'development';

const config = {
    target: "web",
    mode: "production",
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:dev?'"development"':'"production"'
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin()
    ]
};

if (dev) {
    config.devServer={
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors:true,
        }
    };
   config.mode='development';
}

module.exports=config;