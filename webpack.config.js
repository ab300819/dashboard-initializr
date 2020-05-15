const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';

const config = {
  target: 'web',
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(ttf|woff)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: dev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin(),
    new VueLoaderPlugin()
  ]
};

if (dev) {
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  });

  config.devtool = '#cheap-module-eval-source-map';
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  };
  config.mode = 'development';
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  };

  config.module.rules.push({
    test: /\.css$/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader']
    })
  });
  config.plugins.push(
    new ExtractPlugin('main.[chunkhash:8].css'),
    new webpack.optimize.SplitChunksPlugin()
  );
}

module.exports = config;
