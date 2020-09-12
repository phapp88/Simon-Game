const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
});

module.exports = config;
