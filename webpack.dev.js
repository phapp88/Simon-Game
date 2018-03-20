const merge = require('webpack-merge');

const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg$/,
        use: ['file-loader'],
      },
    ],
  },
});

module.exports = config;
