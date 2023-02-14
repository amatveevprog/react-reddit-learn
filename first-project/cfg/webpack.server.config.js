const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global.css$/;


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
      '.js', '.jsx', '.json', '.ts', '.tsx'
    ]
  },
  module: {
    rules: [
      {
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
              localIdentName: '[name]__[local]--[hash:base64:5]',
              //localIdentName: '[name]',
              exportOnlyLocals: true, // вместо onlyLocals на предыдущих версиях css-loader
            },
            // onlyLocals: true
          }
        },
          // 'less-loader'
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader:'file-loader',
          options:{
            name:'[hash]-[name].[ext]',
            outputPath:'/static/images'
          }
        }]
      }
    ],
  },
  externals: [
    nodeExternals()
  ],
  optimization: {
    minimize: false,
  },
  watchOptions: {
    ignored: ['/dist/', '/node_modules/']
  },
  plugins: [new DefinePlugin({
    "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`
  })]
};