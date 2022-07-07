const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.json'
    ]
  },
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]'
          },
          onlyLocals: true, // на сервере не требуется собирать глобальные стили и давать к ним доступ
        }
      }],
    }]
  },
  externals: [
    nodeExternals()
  ],
  optimization: {
    minimize: false,
  }
}