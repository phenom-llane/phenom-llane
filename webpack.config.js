const nodeExternals = require('webpack-node-externals')

const clientConfig = {
  name: 'client',
  entry: './src/client/index.js',
  devtool: 'eval-source-map',
  output: {
    path: `${__dirname}/client`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /js$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader'
      }
    ]
  }
}

const serverConfig = {
  name: 'server',
  entry: './src/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: `${__dirname}/server`,
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /js$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = [clientConfig, serverConfig]

